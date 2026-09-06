import {
  ShieldCheck,
  Activity,
  Radio,
  TrendingDown,
} from "lucide-react";

function StatCard({
  title,
  value,
  unit,
  subtitle,
  type = "safe",
}) {
  const icons = {
    safe: ShieldCheck,
    movement: TrendingDown,
    sensors: Radio,
    live: Activity,
  };

  const Icon = icons[type] || ShieldCheck;

  return (
    <div className={`stat-card ${type}`}>

      <div className="stat-card-header">

        <div className="stat-card-title">
          {title}
        </div>

        <div className="stat-card-icon">
          <Icon size={17} strokeWidth={1.8} />
        </div>

      </div>


      <div className="stat-card-value">

        <span className="stat-number">
          {value}
        </span>

        {unit && (
          <span className="stat-unit">
            {unit}
          </span>
        )}

      </div>


      <div className="stat-card-footer">

        <span className="stat-status-dot" />

        <span>
          {subtitle}
        </span>

      </div>

    </div>
  );
}

export default StatCard;