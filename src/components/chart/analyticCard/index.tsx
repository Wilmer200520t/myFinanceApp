import { classNames } from "primereact/utils";

interface AnalyticsCardProps {
  icon: string;
  value: string;
  description: string;
}

function AnalyticsCard({ icon, value, description }: AnalyticsCardProps) {
  return (
    <div
      className="card p-shadow-3 analytics-card"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.8rem",
        borderRadius: "8px",
        flexWrap: "wrap",
        padding: "1rem",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)",
      }}>
      <div
        className={classNames("icon", icon)}
        style={{ fontSize: "2rem", color: "#4CAF50" }}></div>
      <div className="value" style={{ fontSize: "2rem", fontWeight: "bold" }}>
        {value}
      </div>
      <div className="description" style={{ fontSize: "1rem", color: "#888" }}>
        {description}
      </div>
    </div>
  );
}

export default AnalyticsCard;
