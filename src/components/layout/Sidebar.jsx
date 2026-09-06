import {
  LayoutDashboard,
  Activity,
  Map,
  BrainCircuit,
  Bell,
  Radio,
  History,
  Settings,
  ShieldCheck,
} from "lucide-react";

const menuItems = [
  {
    name: "Overview",
    icon: LayoutDashboard,
  },
  {
    name: "Live Monitoring",
    icon: Activity,
  },
  {
    name: "Mine Map",
    icon: Map,
  },
  {
    name: "Prediction",
    icon: BrainCircuit,
  },
  {
    name: "Alerts",
    icon: Bell,
  },
  {
    name: "Sensors",
    icon: Radio,
  },
  {
    name: "History",
    icon: History,
  },
  {
    name: "System Health",
    icon: Settings,
  },
];

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">

      {/* Brand */}

      <div className="brand">

        <div className="brand-icon">
          <ShieldCheck size={23} />
        </div>

        <div>
          <div className="brand-name">
            MINEGUARD
          </div>

          <div className="brand-subtitle">
            MINE SAFETY SYSTEM
          </div>
        </div>

      </div>


      {/* Navigation */}

      <div className="sidebar-section">

        <div className="section-title">
          NAVIGATION
        </div>

        <nav className="navigation">

          {menuItems.map((item) => {

            const Icon = item.icon;

            const isActive =
              activePage === item.name;

            return (
              <button
                key={item.name}
                className={`nav-item ${
                  isActive ? "active" : ""
                }`}
                onClick={() =>
                  setActivePage(item.name)
                }
              >

                <Icon size={18} />

                <span>
                  {item.name}
                </span>

                {isActive && (
                  <span className="active-dot" />
                )}

              </button>
            );
          })}

        </nav>

      </div>


      {/* Bottom status */}

      <div className="sidebar-status">

        <div className="status-row">

          <span className="status-pulse" />

          <span>
            System Operational
          </span>

        </div>

        <p>
          All monitoring services online
        </p>

      </div>

    </aside>
  );
}

export default Sidebar;