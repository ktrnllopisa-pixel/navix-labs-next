export default function MetricCard({ value, label, detail }) {
  return (
    <article className="metricCard">
      <strong>{value}</strong>
      <span>{label}</span>
      {detail && <p>{detail}</p>}
    </article>
  );
}
