export default function ServiceCard({ title, description, points = [] }) {
  return (
    <article className="serviceCard">
      <h3>{title}</h3>
      <p>{description}</p>

      {points.length > 0 && (
        <ul>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
