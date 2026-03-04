export default function Section({ variant, id, children }) {
  return (
    <section className={`section-${variant}`} id={id}>
      {children}
    </section>
  );
}
