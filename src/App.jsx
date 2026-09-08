import { useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

import Dashboard from "./pages/Dashboard";
import MineMap from "./components/dashboard/MineMap";
import Prediction from "./pages/Prediction";
import LiveMonitoring from "./pages/LiveMonitoring";

function App() {
  const [activePage, setActivePage] = useState("Overview");

  return (
    <div className="app">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main-area">

        <Header />

        <main className="main-content">

          {/* Overview */}
          {activePage === "Overview" && (
            <Dashboard />
          )}

          {/* Mine Map */}
          {activePage === "Mine Map" && (
            <MineMap />
          )}

          {/* Prediction */}
          {activePage === "Prediction" && (
            <Prediction />
          )}

          {activePage === "Live Monitoring" && (
            <LiveMonitoring />
          )}

          {/* Other pages */}
          {activePage !== "Overview" &&
            activePage !== "Mine Map" &&
            activePage !== "Prediction" &&
            activePage !== "Live Monitoring" && (
              <div className="coming-soon">

                <div className="coming-icon">
                  🚧
                </div>

                <h2>{activePage}</h2>

                <p>
                  This monitoring module is under development.
                </p>

              </div>
            )}

        </main>

      </div>

    </div>
  );
}

export default App;