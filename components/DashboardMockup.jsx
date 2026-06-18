const rows = [
  ["Ruta Norte", "12 entregas", "28.4 km", "1h 35m"],
  ["Ruta Centro", "9 entregas", "21.7 km", "1h 10m"],
  ["Ruta Sur", "14 entregas", "34.9 km", "2h 05m"],
];

export default function DashboardMockup() {
  return (
    <div className="dashboardMockup">
      <div className="mockupTop">
        <div>
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <p>Navix Operations Console</p>
      </div>

      <div className="mockupGrid">
        <div className="mockupPanel mapPanel">
          <div className="mapLine lineOne" />
          <div className="mapLine lineTwo" />
          <span className="pin pinOne" />
          <span className="pin pinTwo" />
          <span className="pin pinThree" />
          <span className="pin pinFour" />
        </div>

        <div className="mockupPanel">
          <p className="mockupLabel">Ahorro proyectado</p>
          <strong>31%</strong>
          <span>menos kilómetros recorridos</span>
        </div>

        <div className="mockupPanel">
          <p className="mockupLabel">Flota activa</p>
          <strong>4</strong>
          <span>vehículos asignados</span>
        </div>
      </div>

      <div className="routeTable">
        {rows.map((row) => (
          <div className="routeRow" key={row[0]}>
            {row.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
