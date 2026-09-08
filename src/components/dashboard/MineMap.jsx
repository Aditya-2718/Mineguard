import "./MineMap.css";
import { useState } from "react";
import {
  Radio,
  UserRound,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  MapPin,
} from "lucide-react";
import "./MineMap.css";

const sectors = [
  {
    id: "A",
    name: "Sector A",
    risk: "low",
    description: "Stable ground conditions",
  },
  {
    id: "B",
    name: "Sector B",
    risk: "medium",
    description: "Increased ground movement",
  },
  {
    id: "C",
    name: "Sector C",
    risk: "high",
    description: "High vibration detected",
  },
  {
    id: "D",
    name: "Sector D",
    risk: "critical",
    description: "Critical subsidence risk",
  },
];

const sensors = [
  {
    id: "S01",
    x: 180,
    y: 150,
    sector: "Sector A",
    displacement: "1.2 mm",
    vibration: "1.8 mm/s",
    temperature: "29°C",
    status: "Normal",
  },
  {
    id: "S02",
    x: 350,
    y: 150,
    sector: "Sector A",
    displacement: "1.5 mm",
    vibration: "2.1 mm/s",
    temperature: "30°C",
    status: "Normal",
  },
  {
    id: "S03",
    x: 520,
    y: 250,
    sector: "Sector B",
    displacement: "3.4 mm",
    vibration: "3.8 mm/s",
    temperature: "31°C",
    status: "Warning",
  },
  {
    id: "S04",
    x: 720,
    y: 250,
    sector: "Sector C",
    displacement: "5.8 mm",
    vibration: "6.2 mm/s",
    temperature: "33°C",
    status: "High",
  },
  {
    id: "S05",
    x: 600,
    y: 420,
    sector: "Sector D",
    displacement: "8.4 mm",
    vibration: "8.1 mm/s",
    temperature: "35°C",
    status: "Critical",
  },
  {
    id: "S06",
    x: 850,
    y: 420,
    sector: "Sector C",
    displacement: "4.9 mm",
    vibration: "5.2 mm/s",
    temperature: "32°C",
    status: "Warning",
  },
];

const workers = [
  {
    id: "W01",
    x: 280,
    y: 150,
    sector: "Sector A",
  },
  {
    id: "W02",
    x: 470,
    y: 250,
    sector: "Sector B",
  },
  {
    id: "W03",
    x: 760,
    y: 420,
    sector: "Sector C",
  },
];

function MineMap() {
  const [selectedSensor, setSelectedSensor] = useState(null);
  const [zoom, setZoom] = useState(1);

  const resetMap = () => {
    setZoom(1);
    setSelectedSensor(null);
  };

  return (
    <div className="mine-map-page">

      {/* Header */}
      <div className="mine-map-header">
        <div>
          <span className="section-label">UNDERGROUND MONITORING</span>
          <h1>Mine Map</h1>
          <p>
            Real-time underground mine layout and safety monitoring
          </p>
        </div>

        <div className="map-actions">
          <button onClick={() => setZoom((z) => Math.min(z + 0.2, 2))}>
            <ZoomIn size={17} />
          </button>

          <button onClick={() => setZoom((z) => Math.max(z - 0.2, 0.6))}>
            <ZoomOut size={17} />
          </button>

          <button onClick={resetMap}>
            <RotateCcw size={17} />
            Reset
          </button>
        </div>
      </div>

      {/* Main map area */}
      <div className="mine-map-layout">

        <div className="map-card">

          <div className="map-card-header">
            <div>
              <strong>SingarenI · Block A</strong>
              <span>Underground Level −2</span>
            </div>

            <div className="map-live">
              <span></span>
              LIVE
            </div>
          </div>

          <div className="map-container">

            <svg
              viewBox="0 0 1000 600"
              className="mine-svg"
              style={{
                transform: `scale(${zoom})`,
              }}
            >

              {/* Grid */}
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#17202a"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>

              <rect
                width="1000"
                height="600"
                fill="url(#grid)"
              />

              {/* Sector A */}
              <rect
                x="80"
                y="80"
                width="360"
                height="150"
                rx="18"
                className="sector-low"
              />

              {/* Sector B */}
              <rect
                x="440"
                y="180"
                width="260"
                height="150"
                rx="18"
                className="sector-medium"
              />

              {/* Sector C */}
              <rect
                x="690"
                y="180"
                width="230"
                height="170"
                rx="18"
                className="sector-high"
              />

              {/* Sector D */}
              <rect
                x="440"
                y="350"
                width="300"
                height="170"
                rx="18"
                className="sector-critical"
              />

              {/* Main tunnels */}
              <path
                d="M100 155 H880"
                className="mine-tunnel"
              />

              <path
                d="M450 155 V490"
                className="mine-tunnel"
              />

              <path
                d="M700 250 V470"
                className="mine-tunnel"
              />

              <path
                d="M450 420 H850"
                className="mine-tunnel"
              />

              {/* Tunnel branches */}
              <path
                d="M200 155 V220"
                className="mine-tunnel-small"
              />

              <path
                d="M350 155 V220"
                className="mine-tunnel-small"
              />

              <path
                d="M570 250 V330"
                className="mine-tunnel-small"
              />

              <path
                d="M820 250 V330"
                className="mine-tunnel-small"
              />

              {/* Sector labels */}
              <text x="105" y="110" className="sector-title">
                SECTOR A
              </text>

              <text x="465" y="210" className="sector-title">
                SECTOR B
              </text>

              <text x="715" y="210" className="sector-title">
                SECTOR C
              </text>

              <text x="465" y="385" className="sector-title">
                SECTOR D
              </text>

              {/* Entrance */}
              <g>
                <circle
                  cx="100"
                  cy="155"
                  r="14"
                  className="entrance-marker"
                />

                <text
                  x="75"
                  y="195"
                  className="map-label"
                >
                  ENTRANCE
                </text>
              </g>

              {/* Sensor markers */}
              {sensors.map((sensor) => (
                <g
                  key={sensor.id}
                  onClick={() => setSelectedSensor(sensor)}
                  className="sensor-marker"
                >
                  <circle
                    cx={sensor.x}
                    cy={sensor.y}
                    r="16"
                    className={`sensor-ring sensor-${sensor.status.toLowerCase()}`}
                  />

                  <circle
                    cx={sensor.x}
                    cy={sensor.y}
                    r="7"
                    className="sensor-core"
                  />

                  <text
                    x={sensor.x + 20}
                    y={sensor.y + 5}
                    className="sensor-label"
                  >
                    {sensor.id}
                  </text>
                </g>
              ))}

              {/* Worker markers */}
              {workers.map((worker) => (
                <g
                  key={worker.id}
                  className="worker-marker"
                >
                  <circle
                    cx={worker.x}
                    cy={worker.y}
                    r="13"
                    className="worker-circle"
                  />

                  <foreignObject
                    x={worker.x - 9}
                    y={worker.y - 9}
                    width="18"
                    height="18"
                  >
                    <UserRound
                      size={18}
                      color="#ffffff"
                    />
                  </foreignObject>

                  <text
                    x={worker.x + 18}
                    y={worker.y + 5}
                    className="worker-label"
                  >
                    {worker.id}
                  </text>
                </g>
              ))}

            </svg>

          </div>

          {/* Legend */}
          <div className="map-legend">

            <span className="legend-title">
              RISK LEVEL
            </span>

            <span>
              <i className="legend-dot low"></i>
              Low
            </span>

            <span>
              <i className="legend-dot medium"></i>
              Moderate
            </span>

            <span>
              <i className="legend-dot high"></i>
              High
            </span>

            <span>
              <i className="legend-dot critical"></i>
              Critical
            </span>

            <span>
              <Radio size={15} />
              Sensor
            </span>

            <span>
              <UserRound size={15} />
              Worker
            </span>

          </div>
        </div>

        {/* Right information panel */}
        <div className="map-side-panel">

          {selectedSensor ? (
            <div className="sensor-details">

              <div className="sensor-details-header">
                <div>
                  <span className="section-label">
                    SENSOR NODE
                  </span>

                  <h2>{selectedSensor.id}</h2>
                </div>

                <div
                  className={`status-badge status-${selectedSensor.status.toLowerCase()}`}
                >
                  {selectedSensor.status}
                </div>
              </div>

              <div className="sensor-location">
                <MapPin size={15} />
                {selectedSensor.sector}
              </div>

              <div className="telemetry-grid">

                <div>
                  <span>Ground Displacement</span>
                  <strong>{selectedSensor.displacement}</strong>
                </div>

                <div>
                  <span>Vibration</span>
                  <strong>{selectedSensor.vibration}</strong>
                </div>

                <div>
                  <span>Temperature</span>
                  <strong>{selectedSensor.temperature}</strong>
                </div>

                <div>
                  <span>Connection</span>
                  <strong className="online">
                    ● Online
                  </strong>
                </div>

              </div>

            </div>
          ) : (
            <div className="map-info">

              <span className="section-label">
                MINE STATUS
              </span>

              <h2>Block A</h2>

              <p>
                Select a sensor node on the map to view
                real-time telemetry.
              </p>

              <div className="status-summary">

                <div>
                  <strong>24</strong>
                  <span>Active Sensors</span>
                </div>

                <div>
                  <strong>18</strong>
                  <span>Workers</span>
                </div>

                <div>
                  <strong>4</strong>
                  <span>Sectors</span>
                </div>

              </div>

              <div className="risk-summary">

                <h3>Sector Risk</h3>

                {sectors.map((sector) => (
                  <div
                    className="risk-row"
                    key={sector.id}
                  >
                    <span
                      className={`risk-dot ${sector.risk}`}
                    ></span>

                    <span>{sector.name}</span>

                    <span className="risk-state">
                      {sector.risk}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default MineMap;