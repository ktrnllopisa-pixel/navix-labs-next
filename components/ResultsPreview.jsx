export default function ResultsPreview() {
  const routeRows = [
    ["Chofer 1", "6 entregas", "22 km", "09:00–11:10"],
    ["Chofer 2", "5 entregas", "19 km", "09:00–10:40"],
    ["Chofer 3", "7 entregas", "28 km", "09:00–11:45"],
    ["Chofer 4", "4 entregas", "28 km", "09:00–11:20"],
  ];

  return (
    <div className="resultsPreview">
      <div className="resultsTop">
        <div className="resultsTopLabel">
          <span className="resultsBadge">Entrega ejemplo</span>
          <h3>Resumen operativo de rutas</h3>
          <p>
            Una vista simple de lo que recibe el cliente después del análisis:
            métricas, asignación por chofer y orden de trabajo.
          </p>
        </div>

        <div className="resultsSummary">
          <div className="resultsMetric">
            <strong>-31%</strong>
            <span>reducción estimada</span>
          </div>
          <div className="resultsMetric">
            <strong>97 km</strong>
            <span>recorrido optimizado</span>
          </div>
          <div className="resultsMetric">
            <strong>4.8 h</strong>
            <span>tiempo total estimado</span>
          </div>
        </div>
      </div>

      <div className="resultsBody">
        <div className="resultsPanel">
          <p className="resultsPanelTitle">Qué se entrega</p>

          <ul className="deliverableList">
            <li>Rutas ordenadas por chofer</li>
            <li>Excel con secuencia de visitas</li>
            <li>Resumen de kilómetros y tiempo</li>
            <li>Comparación antes/después</li>
            <li>Mapa operativo para revisión</li>
          </ul>
        </div>

        <div className="resultsPanel">
          <p className="resultsPanelTitle">Asignación por chofer</p>

          <div className="resultsTable">
            <div className="resultsTableHead">
              <span>Chofer</span>
              <span>Entregas</span>
              <span>Km</span>
              <span>Horario</span>
            </div>

            {routeRows.map((row) => (
              <div className="resultsTableRow" key={row[0]}>
                {row.map((cell) => (
                  <span key={cell}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
