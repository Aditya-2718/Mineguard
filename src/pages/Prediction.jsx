import { useState } from "react";
import {
  BrainCircuit,
  Activity,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import "./Prediction.css";

const sectors = [
  {
    name: "Sector A",
    risk: "Low",
    score: 24,
  },
  {
    name: "Sector B",
    risk: "Medium",
    score: 48,
  },
  {
    name: "Sector C",
    risk: "High",
    score: 76,
  },
  {
    name: "Sector D",
    risk: "Critical",
    score: 91,
  },
];

function Prediction() {
  const [prediction, setPrediction] = useState(78);
  const [loading, setLoading] = useState(false);

  const runPrediction = () => {
    setLoading(true);

    setTimeout(() => {
      setPrediction(Math.floor(Math.random() * 20) + 70);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="prediction-page">

      {/* PAGE HEADER */}
      <div className="prediction-header">

        <div>
          <span className="prediction-label">
            AI SAFETY INTELLIGENCE
          </span>

          <h1>Prediction Portal</h1>

          <p>
            AI-powered subsidence and ground movement prediction
          </p>
        </div>

        <div className="model-status">
          <span></span>
          MODEL ONLINE
        </div>

      </div>


      {/* KPI CARDS */}
      <div className="prediction-kpis">

        <div className="prediction-card">
          <div className="prediction-card-top">
            <span>Risk Score</span>
            <AlertTriangle size={18} />
          </div>

          <strong className="risk-number">
            {prediction}
          </strong>

          <small>
            / 100
          </small>

          <div className="risk-bar">
            <div
              style={{ width: `${prediction}%` }}
            ></div>
          </div>

          <p>Current prediction</p>
        </div>


        <div className="prediction-card">

          <div className="prediction-card-top">
            <span>24-Hour Risk</span>
            <Activity size={18} />
          </div>

          <strong className="high-text">
            HIGH
          </strong>

          <p>
            Increased movement expected
          </p>

        </div>


        <div className="prediction-card">

          <div className="prediction-card-top">
            <span>Model Confidence</span>
            <ShieldCheck size={18} />
          </div>

          <strong>
            91%
          </strong>

          <p>
            Prediction confidence
          </p>

        </div>


        <div className="prediction-card">

          <div className="prediction-card-top">
            <span>Risk Trend</span>
            <TrendingUp size={18} />
          </div>

          <strong className="high-text">
            +12%
          </strong>

          <p>
            Compared with previous period
          </p>

        </div>

      </div>


      {/* MAIN GRID */}
      <div className="prediction-main-grid">

        {/* FORECAST */}
        <div className="prediction-panel forecast-panel">

          <div className="panel-header">

            <div>
              <span className="prediction-label">
                FORECAST
              </span>

              <h2>Subsidence Risk Forecast</h2>
            </div>

            <span className="forecast-period">
              Next 24 hours
            </span>

          </div>


          {/* CHART */}
          <div className="forecast-chart">

            <div className="chart-y-axis">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>

            <div className="chart-area">

              <div className="chart-grid-line"></div>
              <div className="chart-grid-line"></div>
              <div className="chart-grid-line"></div>
              <div className="chart-grid-line"></div>

              <svg
                viewBox="0 0 700 280"
                preserveAspectRatio="none"
                className="forecast-svg"
              >

                <defs>
                  <linearGradient
                    id="predictionFill"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopOpacity="0.3"
                    />

                    <stop
                      offset="100%"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="
                    M0 220
                    C50 210 70 200 110 205
                    C150 210 165 170 205 175
                    C245 180 260 145 300 150
                    C340 155 355 120 400 130
                    C445 140 455 100 500 108
                    C545 115 565 75 605 82
                    C640 90 665 55 700 65
                    L700 280
                    L0 280
                    Z
                  "
                  fill="url(#predictionFill)"
                />

                <path
                  d="
                    M0 220
                    C50 210 70 200 110 205
                    C150 210 165 170 205 175
                    C245 180 260 145 300 150
                    C340 155 355 120 400 130
                    C445 140 455 100 500 108
                    C545 115 565 75 605 82
                    C640 90 665 55 700 65
                  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />

              </svg>

              <div className="chart-x-axis">
                <span>Now</span>
                <span>6h</span>
                <span>12h</span>
                <span>18h</span>
                <span>24h</span>
              </div>

            </div>

          </div>

          <div className="forecast-footer">

            <span>
              <i className="forecast-dot"></i>
              Predicted risk
            </span>

            <span>
              Model: MineGuard AI v1.0
            </span>

          </div>

        </div>


        {/* RISK FACTORS */}
        <div className="prediction-panel">

          <div className="panel-header">

            <div>
              <span className="prediction-label">
                ANALYSIS
              </span>

              <h2>Risk Factors</h2>
            </div>

          </div>


          <div className="factor-list">

            <div className="factor">

              <div>
                <span>Ground Movement</span>
                <small>High influence</small>
              </div>

              <strong>82%</strong>

            </div>

            <div className="factor-bar">
              <div style={{ width: "82%" }}></div>
            </div>


            <div className="factor">

              <div>
                <span>Vibration</span>
                <small>High influence</small>
              </div>

              <strong>71%</strong>

            </div>

            <div className="factor-bar">
              <div style={{ width: "71%" }}></div>
            </div>


            <div className="factor">

              <div>
                <span>Rock Stress</span>
                <small>Moderate influence</small>
              </div>

              <strong>58%</strong>

            </div>

            <div className="factor-bar">
              <div style={{ width: "58%" }}></div>
            </div>


            <div className="factor">

              <div>
                <span>Temperature</span>
                <small>Low influence</small>
              </div>

              <strong>32%</strong>

            </div>

            <div className="factor-bar">
              <div style={{ width: "32%" }}></div>
            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM GRID */}
      <div className="prediction-bottom-grid">

        {/* SECTOR PREDICTIONS */}
        <div className="prediction-panel">

          <div className="panel-header">

            <div>
              <span className="prediction-label">
                SECTOR ANALYSIS
              </span>

              <h2>Predicted Risk by Sector</h2>
            </div>

          </div>


          <div className="sector-predictions">

            {sectors.map((sector) => (

              <div
                className="sector-prediction"
                key={sector.name}
              >

                <div className="sector-name">

                  <span
                    className={`risk-indicator ${sector.risk.toLowerCase()}`}
                  ></span>

                  <span>{sector.name}</span>

                </div>

                <div className="sector-score">

                  <div className="mini-risk-bar">

                    <div
                      className={sector.risk.toLowerCase()}
                      style={{
                        width: `${sector.score}%`,
                      }}
                    ></div>

                  </div>

                  <strong>
                    {sector.score}
                  </strong>

                  <span>
                    {sector.risk}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* AI RECOMMENDATION */}
        <div className="prediction-panel recommendation-panel">

          <span className="prediction-label">
            AI RECOMMENDATION
          </span>

          <div className="recommendation-icon">
            <BrainCircuit size={25} />
          </div>

          <h2>
            Increased subsidence risk detected
          </h2>

          <p>
            MineGuard AI predicts elevated ground movement
            in Sector C and Sector D during the next
            monitoring period.
          </p>

          <div className="recommendation-warning">
            <AlertTriangle size={17} />

            <span>
              Recommend immediate inspection of high-risk
              monitoring zones.
            </span>
          </div>

          <button
            className="prediction-button"
            onClick={runPrediction}
            disabled={loading}
          >
            <RefreshCw
              size={16}
              className={loading ? "spin" : ""}
            />

            {loading
              ? "Running Prediction..."
              : "Run New Prediction"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Prediction;