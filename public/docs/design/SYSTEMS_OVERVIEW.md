# Exemem + FoldDB: a systems overview

Four orthogonal planes, composed — not a monolith with features bolted on. This page describes what the platform *is* at the systems level, independent of any particular feature it exposes.

## 1. The substrate: schema-owned records and keys

The database is not rows-in-tables. Each schema owns its records. A schema names its fields, its primary key, and its named alternate keys. A **molecule** holds the keys for one field in one schema and one key layout. An **atom** holds the data for one field at one key and points at a file.

Two schemas can reuse one canonical field definition. The canonical field supplies the name, the description, and the type. It does not share values: each schema owns its record values, and a write to one schema does not change another schema.

A second lookup does not need a second schema. The schema declares a named alternate key, and the write updates the related molecules for that key. A read by the alternate key returns the record and its primary key.

```mermaid
flowchart TB
  subgraph schemas["Schema layer — each schema owns its records"]
    direction LR
    A["SchemaA<br/>primary key + alternate key"]
    B["SchemaB<br/>primary key"]
  end
  subgraph mols["Molecule layer — keys per schema, field, and key layout"]
    direction LR
    ap[("A · x · primary")]
    aa[("A · x · alternate")]
    bp[("B · x · primary")]
  end
  subgraph atoms["Atom layer — data at one key"]
    direction LR
    a1[("atom: A.x")]
    b1[("atom: B.x")]
  end
  A --> ap
  A --> aa
  B --> bp
  ap --> a1
  aa --> a1
  bp --> b1
```

Consequence: a schema change that adds an alternate key backfills the existing keys of that schema. It does not read or write another schema. Trigger-driven transforms (WASM) recompute derived records when upstream ones mutate — views are first-class data, not queries.

## 2. The sync plane: append-only encrypted log per prefix

Sled is always the live DB. Durability, multi-device, and org-sharing all ride on *one* mechanism: an append-only log of encrypted write events, partitioned by prefix.

```mermaid
flowchart LR
  subgraph node["fold_db_node (device / cloud node)"]
    direction TB
    h["handlers"] --> sks["SyncingKvStore"]
    sks --> sled[("Sled")]
    sks -. pending entries .-> engine["SyncEngine (timer)"]
  end
  engine -- "1. presign + seq" --> storage["storage_service<br/>(Lambda)"]
  storage -. assigns seq atomically .-> engine
  engine -- "2. PUT encrypted" --> b2[("Backblaze B2<br/>/{prefix}/log/{seq}.enc")]
```

- `prefix = user_hash` → encrypted with node's E2E key (personal)
- `prefix = org_hash` → encrypted with org's shared key (org)

Download is symmetric: list after cursor → decrypt → replay into Sled. **No** device IDs, member IDs, or special org path — provenance lives on the data (`pub_key` on the mutation), not on the sync path.

## 3. The control plane: Lambdas as primitives, not apps

`exemem-infra` is layered — L1 primitives, L2 services, L3 apps. FoldDB itself is **not** a Lambda; queries run in-process on the node. The cloud's job is coordination, not data access.

```mermaid
flowchart TB
  subgraph L3["Layer 3 — Apps"]
    direction LR
    d["discovery"]
    sub["subscription"]
    org["org_service"]
  end
  subgraph L2["Layer 2 — Services"]
    direction LR
    ak["api_keys"]
    bill["billing"]
    sc["storage_counter"]
    sa["storage_admin"]
  end
  subgraph L1["Layer 1 — Primitives"]
    direction LR
    auth["auth_service"]
    stor["storage_service"]
    msg["messaging_service"]
  end
  subgraph state["State"]
    direction LR
    b2[("B2 — log shards")]
    stores[("per-service stores")]
  end
  L3 --> L2 --> L1 --> state
  schema["schema_service<br/>(own repo · schema.folddb.com)"]:::beside
  classDef beside stroke-dasharray: 5 5,fill:#fafafa
```

`schema_service` lives *beside* this stack — schemas are not per-tenant data, they're a shared registry with similarity-dedup across all FoldDB instances.

## 4. The node: where policy lives

`fold_db_node` is the thing users actually run (Tauri app / headless server). It composes fold_db + HTTP handlers + agents + trust domains + UI.

```mermaid
flowchart TB
  ui["UI (React)"]
  cli["CLI"]
  ext["External HTTP clients"]
  subgraph handlers["fold_db_node — HTTP handlers (framework-agnostic)"]
    direction LR
    agents["Agents / Transforms"]
    trust["Trust Domains"]
    schemaclient["Schema client"]
  end
  subgraph fdb["fold_db (library)"]
    direction LR
    core["molecules · schemas · triggers"]
  end
  sled[("Sled")]
  engine["SyncEngine"]
  control["control plane §3"]
  schemasvc["schema_service"]

  ui --> handlers
  cli --> handlers
  ext --> handlers
  handlers --> fdb
  fdb --> sled
  sled -. writes .-> engine
  engine -.-> control
  schemaclient -. v1 API .-> schemasvc
```

## The shape, in one sentence

**FoldDB** is a local-first store whose schemas own their records and keys and whose views are triggered transforms. **Exemem** is what you get when you point that store's write-log at a shared object store, assign sequence numbers via a primitives Lambda stack, and let any number of nodes replay the same prefix under the same key. Trust domains, orgs, and multi-device are all the same mechanism with a different prefix + key.
