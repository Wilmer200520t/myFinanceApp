import TableMoviments from "../report";
import BarIncomeExch from "../../chart/bar";
import AxisIcomeExch from "../../chart/multiAxis";
import PieBudgetExch from "../../chart/pie";
import DouIncomeExch from "../../chart/doughtnut";
import AnalyticCard from "../../chart/analyticCard";

function Dashboard() {
  return (
    <div className="dash">
      <div className="dash_header">
        <div>
          <AnalyticCard
            icon="pi pi-dollar"
            value="21.2k"
            description="Total Presupuesto"
          />
        </div>
        <div>
          <AnalyticCard
            icon="pi pi-dollar"
            value="15.4k"
            description="Total Gastos"
          />
        </div>
        <div>
          <AnalyticCard
            icon="pi pi-dollar"
            value="$8.9k"
            description="Total Ingresos"
          />
        </div>
      </div>
      <div className="dash_body">
        <div className="dash_body_left">
          <div className="dash_body_left_top">
            <BarIncomeExch />
          </div>
          <div className="dash_body_left_bottom">
            <TableMoviments />
          </div>
        </div>
        <div className="dash_body_right">
          <div className="dash_body_right_top">
            <AxisIcomeExch />
          </div>
          <div className="dash_body_right_bottom">
            <div className="dash_body_right_bottom_left">
              <PieBudgetExch />
            </div>
            <div className="dash_body_right_bottom_right">
              <DouIncomeExch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
