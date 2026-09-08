import { useEffect, useState } from "react";
import {
  Activity,
  Radio,
  Thermometer,
  Vibrate,
  Play,
  Pause,
  RotateCcw,
  AlertTriangle,
  UserRound,
} from "lucide-react";

import "./LiveMonitoring.css";

const initialSensors = [
  {
    id: "S01",
    location: "Main Tunnel",
    displacement: 1.2,
    vibration: 1.8,
    temperature: 29,
    status: "Normal",
  },
  {
    id: "S02",
    location: "North Section",
    displacement: 1.5,
    vibration: 2.1,
    temperature: 30,
    status: "Normal",
  },
  {
    id: "S03",
    location: "Central Junction",
    displacement: 3.4,
    vibration: 3.8,
    temperature: 31,
    status: "Warning",
  },
  {
    id: "S04",
    location: "East Tunnel",
    displacement: 5.8,
    vibration: 6.2,
    temperature: 33,
    status: "High",
  },
  {
    id: "S05",
    location: "South Section",
    displacement: 8.4,
    vibration: 8.1,
    temperature: 35,
    status: "Critical",
  },
  {
    id: "S06",
    location: "West Junction",
    displacement: 4.9,
    vibration: 5.2,
    temperature: 32,
    status: "Warning",
  },
];

function LiveMonitoring() {
  const [sensors, setSensors] = useState(initialSensors);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (!isLive) return;

    const timer = setInterval(() => {
      setSensors((previousSensors) =>
        previousSensors.map((sensor) => {
          const movement = Math.max(
            0.1,
            sensor.displacement +
              (Math.random() - 0.5) * 0.3
          );

          const vibration = Math.max(
            0.5,
            sensor.vibration +
              (Math.random() - 0.5) * 0.4
          );

          let status = "Normal";

          if (movement >= 7) {
            status = "Critical";
          } else if (movement >= 4.5) {
            status = "High";
          } else if (movement >= 2.5) {
            status = "Warning";
          }

          return {
            ...sensor,
            displacement: Number(movement.toFixed(1)),
            vibration: Number(vibration.toFixed(1)),
          };
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [isLive]);

  const resetData = () => {
    setSensors(initialSensors);
    setIsLive(true);
  };

  const simulateAlert = () => {
    setSensors((previousSensors) =>
      previousSensors.map((sensor) =>
        sensor.id === "S05"
          ? {
              ...sensor,
              displacement: 9.8,
              vibration: 9.2,
              status: "Critical",
            }
          : sensor
      )
    );
  };

  const averageMovement =
    sensors.reduce(
      (sum, sensor) => sum + sensor.displacement,
      0
    ) / sensors.length;

  const peakVibration = Math.max(
    ...sensors.map((sensor) => sensor.vibration)
  );

  const criticalSensors = sensors.filter(
    (sensor) => sensor.status === "Critical"
  ).length;

  return (
    <div className="live-monitoring-page">

      {/* HEADER */}

      <div className="live-header">

        <div>
          <span className="live-label">
            REAL-TIME TELEMETRY
          </span>

          <h1>Live Monitoring</h1>

          <p>
            Continuous underground sensor monitoring
            and safety telemetry
          </p>
        </div>

        <div className="live-controls">

          <div
            className={
              isLive
                ? "connection-status"
                : "connection-status paused"
            }
          >
            <span></span>

            {isLive ? "LIVE DATA" : "PAUSED"}
          </div>

          <button
            className="control-button"
            onClick={() => setIsLive(!isLive)}
          >
            {isLive ? (
              <Pause size={16} />
            ) : (
              <Play size={16} />
            )}

            {isLive ? "Pause" : "Resume"}
          </button>

          <button
            className="control-button"
            onClick={resetData}
          >
            <RotateCcw size={16} />
            Reset
          </button>

        </div>

      </div>


      {/* KPI CARDS */}

      <div className="monitor-kpis">

        <div className="monitor-card">

          <div className="monitor-card-icon green">
            <Radio size={19} />
          </div>

          <span>Active Sensors</span>

          <strong>
            {sensors.length}
            <small> / 45</small>
          </strong>

          <p>
            ● Sensor network online
          </p>

        </div>


        <div className="monitor-card">

          <div className="monitor-card-icon yellow">
            <Activity size={19} />
          </div>

          <span>Ground Movement</span>

          <strong>
            {averageMovement.toFixed(1)}
            <small> mm</small>
          </strong>

          <p>
            Current average displacement
          </p>

        </div>


        <div className="monitor-card">

          <div className="monitor-card-icon orange">
            <Vibrate size={19} />
          </div>

          <span>Peak Vibration</span>

          <strong>
            {peakVibration.toFixed(1)}
            <small> mm/s</small>
          </strong>

          <p>
            Highest sensor reading
          </p>

        </div>


        <div className="monitor-card">

          <div className="monitor-card-icon red">
            <AlertTriangle size={19} />
          </div>

          <span>Critical Sensors</span>

          <strong className="critical-number">
            {criticalSensors}
          </strong>

          <p>
            {criticalSensors > 0
              ? "Attention required"
              : "No critical readings"}
          </p>

        </div>

      </div>


      {/* MAIN CONTENT */}

      <div className="monitor-grid">

        {/* TELEMETRY */}

        <div className="monitor-panel">

          <div className="panel-title">

            <div>
              <span className="live-label">
                SENSOR TELEMETRY
              </span>

              <h2>Ground Movement</h2>
            </div>

            <Activity size={20} />

          </div>

          <div className="simple-chart">

            {sensors.map((sensor) => (

              <div
                className="chart-bar-container"
                key={sensor.id}
              >

                <div className="chart-bar-wrapper">

                  <div
                    className={`chart-bar ${sensor.status.toLowerCase()}`}
                    style={{
                      height: `${Math.min(
                        sensor.displacement * 10,
                        100
                      )}%`,
                    }}
                  ></div>

                </div>

                <span>{sensor.id}</span>

                <strong>
                  {sensor.displacement} mm
                </strong>

              </div>

            ))}

          </div>

          <div className="chart-note">
            Live sensor readings · updates every 2 seconds
          </div>

        </div>


        {/* ALERT PANEL */}

        <div className="monitor-panel">

          <div className="panel-title">

            <div>
              <span className="live-label">
                SAFETY EVENTS
              </span>

              <h2>Active Alerts</h2>
            </div>

            <span className="alert-count">
              {criticalSensors}
            </span>

          </div>


          {criticalSensors > 0 ? (

            <div className="alert-box">

              <AlertTriangle size={20} />

              <div>
                <strong>
                  Critical movement detected
                </strong>

                <p>
                  Sensor S05 · South Section
                </p>

                <small>
                  Ground displacement is above
                  the safe threshold.
                </small>
              </div>

            </div>

          ) : (

            <div className="no-alerts">

              <div className="safe-icon">
                ✓
              </div>

              <strong>
                No critical alerts
              </strong>

              <p>
                All monitored zones are within
                acceptable limits.
              </p>

            </div>

          )}


          <button
            className="simulate-alert"
            onClick={simulateAlert}
          >
            <AlertTriangle size={15} />
            Simulate Alert
          </button>

        </div>

      </div>


      {/* SENSOR TABLE */}

      <div className="monitor-panel sensor-panel">

        <div className="panel-title">

          <div>
            <span className="live-label">
              SENSOR NETWORK
            </span>

            <h2>Live Sensor Telemetry</h2>
          </div>

          <Radio size={19} />

        </div>


        <div className="sensor-table">

          <div className="sensor-row heading">

            <span>Sensor</span>
            <span>Location</span>
            <span>Movement</span>
            <span>Vibration</span>
            <span>Temperature</span>
            <span>Status</span>

          </div>


          {sensors.map((sensor) => (

            <div
              className="sensor-row"
              key={sensor.id}
            >

              <strong className="sensor-id">
                <span></span>
                {sensor.id}
              </strong>

              <span>
                {sensor.location}
              </span>

              <strong>
                {sensor.displacement} mm
              </strong>

              <span>
                {sensor.vibration} mm/s
              </span>

              <span>
                {sensor.temperature} °C
              </span>

              <span
                className={`sensor-status ${sensor.status.toLowerCase()}`}
              >
                {sensor.status}
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* WORKERS */}

      <div className="monitor-panel workers-panel">

        <div className="panel-title">

          <div>
            <span className="live-label">
              PERSONNEL SAFETY
            </span>

            <h2>Worker Monitoring</h2>
          </div>

          <span className="worker-count">
            18 workers underground
          </span>

        </div>


        <div className="workers-grid">

          <div className="worker-card">

            <div className="worker-avatar">
              <UserRound size={18} />
            </div>

            <div>
              <strong>W01</strong>
              <span>Sector A · Level −2</span>
            </div>

            <i></i>

          </div>


          <div className="worker-card">

            <div className="worker-avatar">
              <UserRound size={18} />
            </div>

            <div>
              <strong>W02</strong>
              <span>Sector B · Level −2</span>
            </div>

            <i></i>

          </div>


          <div className="worker-card">

            <div className="worker-avatar">
              <UserRound size={18} />
            </div>

            <div>
              <strong>W03</strong>
              <span>Sector C · Level −2</span>
            </div>

            <i className="warning"></i>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LiveMonitoring;