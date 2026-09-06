import {
  Activity,
  ArrowDown,
  ArrowUp,
  MapPin,
  ShieldCheck,
  AlertTriangle,
  Radio,
  Gauge,
} from "lucide-react";

import StatCard from "../components/dashboard/StatCard.jsx";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* =====================================================
          PAGE INTRO
      ===================================================== */}

      <div className="dashboard-intro">

        <div>
          <div className="dashboard-kicker">
            UNDERGROUND COAL MINE · BLOCK A
          </div>

          <h2>
            Real-time subsidence monitoring
          </h2>

          <p>
            Continuous ground movement analysis, sensor telemetry
            and early warning intelligence.
          </p>
        </div>

        <div className="dashboard-safe">

          <ShieldCheck size={18} />

          <div>
            <strong>Mine currently stable</strong>
            <span>Last assessment · 14:31:52</span>
          </div>

        </div>

      </div>


      {/* =====================================================
          STAT CARDS
      ===================================================== */}

      <div className="stats-grid">

       <StatCard
  title="SUBSIDENCE RISK"
  value="LOW"
  subtitle="Within safe operating range"
  type="safe"
/>

<StatCard
  title="GROUND MOVEMENT"
  value="2.4"
  unit="mm"
  subtitle="4.2% lower than yesterday"
  type="movement"
/>

<StatCard
  title="ACTIVE SENSORS"
  value="42"
  unit="/45"
  subtitle="93.3% sensors online"
  type="sensors"
/>

<StatCard
  title="MONITORING STATUS"
  value="LIVE"
  subtitle="Real-time telemetry active"
  type="live"
/>
      </div>


      {/* =====================================================
          MAIN GRID
      ===================================================== */}

      <div className="dashboard-grid">


        {/* -------------------------------------------------
            MINE MAP
        ------------------------------------------------- */}

        <section className="panel mine-map-panel">

          <div className="panel-header">

            <div>

              <div className="panel-label">
                SPATIAL MONITORING
              </div>

              <h3>
                Underground Mine Map
              </h3>

            </div>

            <div className="map-live">
              <span />
              LIVE
            </div>

          </div>


          <div className="mine-map">

            <div className="map-grid" />

            <div className="map-title">
              BLOCK A · LEVEL -240M
            </div>


            {/* Tunnels */}

            <div className="tunnel tunnel-1" />
            <div className="tunnel tunnel-2" />
            <div className="tunnel tunnel-3" />
            <div className="tunnel tunnel-4" />
            <div className="tunnel tunnel-5" />


            {/* Sensor points */}

            <div className="sensor sensor-safe s1">
              <span />
            </div>

            <div className="sensor sensor-safe s2">
              <span />
            </div>

            <div className="sensor sensor-safe s3">
              <span />
            </div>

            <div className="sensor sensor-warning s4">
              <span />
            </div>

            <div className="sensor sensor-safe s5">
              <span />
            </div>

            <div className="sensor sensor-safe s6">
              <span />
            </div>

            <div className="sensor sensor-warning s7">
              <span />
            </div>


            <div className="map-location">

              <MapPin size={15} />

              <span>
                Monitoring Zone A
              </span>

            </div>

          </div>


          <div className="map-footer">

            <div className="map-legend">

              <span>
                <i className="legend-safe" />
                Normal
              </span>

              <span>
                <i className="legend-warning" />
                Attention
              </span>

              <span>
                <i className="legend-critical" />
                Critical
              </span>

            </div>

            <span className="map-update">
              Updated 8 sec ago
            </span>

          </div>

        </section>


        {/* -------------------------------------------------
            RISK PANEL
        ------------------------------------------------- */}

        <section className="panel risk-panel">

          <div className="panel-header">

            <div>

              <div className="panel-label">
                SAFETY INDEX
              </div>

              <h3>
                Subsidence Risk
              </h3>

            </div>

            <Gauge size={18} />

          </div>


          <div className="risk-gauge">

            <div className="gauge-ring">

              <div className="gauge-inner">

                <strong>
                  18
                </strong>

                <span>
                  / 100
                </span>

              </div>

            </div>

            <div className="risk-level">
              LOW RISK
            </div>

          </div>


          <div className="risk-description">

            Current ground stability is within
            acceptable operating limits.

          </div>


          <div className="risk-breakdown">

            <div>
              <span>Ground displacement</span>
              <strong>Normal</strong>
            </div>

            <div>
              <span>Roof pressure</span>
              <strong>Stable</strong>
            </div>

            <div>
              <span>Sensor confidence</span>
              <strong>94%</strong>
            </div>

          </div>

        </section>


      </div>


      {/* =====================================================
          LOWER SECTION
      ===================================================== */}

      <div className="dashboard-grid lower-grid">


        {/* Ground movement */}

        <section className="panel movement-panel">

          <div className="panel-header">

            <div>

              <div className="panel-label">
                SENSOR TELEMETRY
              </div>

              <h3>
                Ground Movement
              </h3>

            </div>

            <div className="movement-value">
              <strong>2.4 mm</strong>
              <span>
                <ArrowDown size={12} />
                4.2% today
              </span>
            </div>

          </div>


          <div className="movement-chart">

            <div className="chart-lines">
              <span />
              <span />
              <span />
              <span />
            </div>

            <svg
              viewBox="0 0 800 220"
              preserveAspectRatio="none"
            >

              <defs>

                <linearGradient
                  id="movementFill"
                  x1="0"
                  x2="0"
                  y1="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    stopOpacity="0.25"
                  />

                  <stop
                    offset="100%"
                    stopOpacity="0"
                  />

                </linearGradient>

              </defs>


              <path
                d="M0 160
                   C40 155 60 140 100 145
                   S160 175 200 150
                   S260 125 300 138
                   S360 165 400 125
                   S460 105 500 130
                   S560 145 600 112
                   S660 100 700 116
                   S760 125 800 92
                   L800 220
                   L0 220 Z"
                fill="url(#movementFill)"
              />


              <path
                d="M0 160
                   C40 155 60 140 100 145
                   S160 175 200 150
                   S260 125 300 138
                   S360 165 400 125
                   S460 105 500 130
                   S560 145 600 112
                   S660 100 700 116
                   S760 125 800 92"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />

            </svg>

          </div>

          <div className="chart-axis">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>NOW</span>
          </div>

        </section>


        {/* Alerts */}

        <section className="panel alerts-panel">

          <div className="panel-header">

            <div>

              <div className="panel-label">
                SAFETY EVENTS
              </div>

              <h3>
                Active Alerts
              </h3>

            </div>

            <span className="alert-count">
              02
            </span>

          </div>


          <div className="alert-item warning">

            <div className="alert-icon">
              <AlertTriangle size={17} />
            </div>

            <div className="alert-content">

              <strong>
                Ground movement detected
              </strong>

              <span>
                Sensor G-17 · Zone B
              </span>

            </div>

            <time>
              4m
            </time>

          </div>


          <div className="alert-item info">

            <div className="alert-icon">
              <Activity size={17} />
            </div>

            <div className="alert-content">

              <strong>
                Pressure variation
              </strong>

              <span>
                Sensor P-08 · Level -240m
              </span>

            </div>

            <time>
              12m
            </time>

          </div>


          <button className="view-alerts">
            View all safety events →
          </button>

        </section>

      </div>

    </div>
  );
}

export default Dashboard;