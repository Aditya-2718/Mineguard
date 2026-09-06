import {
  Radio,
  Bell,
  ChevronDown,
  Clock3,
} from "lucide-react";

function Header() {
  return (
    <header className="header">

      {/* Left */}

      <div className="header-title">

        <div className="eyebrow">
          SAFETY COMMAND CENTER
        </div>

        <h1>
          Mine Overview
        </h1>

      </div>


      {/* Right */}

      <div className="header-actions">

        {/* Mine */}

        <button className="mine-selector">

          <div>

            <div className="selector-label">
              ACTIVE MINE
            </div>

            <div className="selector-value">
              Singareni · Block A
            </div>

          </div>

          <ChevronDown size={14} />

        </button>


        {/* Live */}

        <div className="live-status">

          <span className="live-dot" />

          <Radio size={14} />

          <span>
            LIVE
          </span>

        </div>


        {/* Time */}

        <div className="header-time">

          <Clock3 size={14} />

          <span>
            14:32:18
          </span>

        </div>


        {/* Notification */}

        <button className="notification-button">

          <Bell size={17} />

          <span className="notification-dot" />

        </button>


        {/* Operator */}

        <div className="operator">

          <div className="operator-avatar">
            OP
          </div>

          <div>

            <div className="operator-name">
              Operator
            </div>

            <div className="operator-role">
              Control Room
            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;