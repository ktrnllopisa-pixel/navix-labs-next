export default function ProcessStep({ number, title, text }) {
  return (
    <article className="processStep">
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
