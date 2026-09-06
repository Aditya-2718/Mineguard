import { useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./pages/Dashboard";

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

          {activePage === "Overview" && (
            <Dashboard />
          )}

          {activePage !== "Overview" && (
            <div className="coming-soon">

              <div className="coming-icon">
                🚧
              </div>

              <h2>
                {activePage}
              </h2>

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