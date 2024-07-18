import TableMoviments from "../report";
import BarIncomeExch from "../../chart/bar";
import AxisIcomeExch from "../../chart/multiAxis";
import PieBudgetExch from "../../chart/pie";
import DouIncomeExch from "../../chart/doughtnut";
import AnalyticCard from "../../chart/analyticCard";
import credentials from "../../../auth/credentials";
import { useEffect, useMemo, useState } from "react";
import { getQuery } from "../../../data/fetchData";

function Dashboard() {
  const userCredentials = useMemo(() => new credentials(), []);
  const user = userCredentials.getUser();
  const user_id = user?.id || 0;
  const conditionUser = ` WHERE user_id = ${user_id}`;
  const [Ingresos, setIngresos] = useState(0);
  const [Presupuesto, setPresupuesto] = useState(0);
  const [Gastos, setGastos] = useState(0);
  const [BalanceMesActual, setBalanceMesActual] = useState({
    ingresos: [0, 0, 0, 0, 0],
    gastos: [0, 0, 0, 0, 0],
    presupuestos: [0, 0, 0, 0, 0],
  });

  const [BalanceAnual, setBalanceAnual] = useState({
    ingresos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    gastos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    presupuestos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });

  useEffect(() => {
    getQuery(
      `SELECT IFNULL(SUM(monto), 0) AS total FROM fingresos ${conditionUser} AND MONTH(created_at) = MONTH(CURRENT_DATE())`
    ).then((data) => {
      setIngresos(data.total);
    });
    console.log(Ingresos);
    getQuery(
      `SELECT IFNULL(SUM(preamount), 0) AS total FROM fpresupuestos ${conditionUser} AND MONTH(created_at) = MONTH(CURRENT_DATE())`
    ).then((data) => (Presupuesto = data.total as number));

    console.log(Presupuesto);
    getQuery(
      `SELECT IFNULL(SUM(monto), 0) AS total FROM ftransacciones ${conditionUser} AND MONTH(created_at) = MONTH(CURRENT_DATE())`
    ).then((data) => (Gastos = data.total));
  }, []);

  const PreguspuestGastos = {
    gastos: Gastos,
    presupuestos: Presupuesto,
  };

  const IngresosGastos = {
    ingresos: Ingresos,
    gastos: Gastos,
  };

  return (
    <div className="dash">
      <div className="dash_header">
        <div>
          <AnalyticCard
            icon="pi pi-dollar"
            value={`S/. ${Presupuesto.toString()}`}
            description="Total Presupuesto"
          />
        </div>
        <div>
          <AnalyticCard
            icon="pi pi-dollar"
            value={`S/. ${Gastos.toString()}`}
            description="Total Gastos"
          />
        </div>
        <div>
          <AnalyticCard
            icon="pi pi-dollar"
            value={`S/. ${Ingresos.toString()}`}
            description="Total Ingresos"
          />
        </div>
      </div>
      <div className="dash_body">
        <div className="dash_body_left">
          <div className="dash_body_left_top">
            <h2 className="dash_subtitle">Balance del Mes Actual</h2>
            <BarIncomeExch data={BalanceMesActual} />
          </div>
          <div className="dash_body_left_bottom">
            <h2 className="dash_subtitle">Ultimos movimientos</h2>
            <TableMoviments />
          </div>
        </div>
        <div className="dash_body_right">
          <div className="dash_body_right_top">
            <h2 className="dash_subtitle">Analisis del Año Actual</h2>
            <AxisIcomeExch data={BalanceAnual} />
          </div>
          <div className="dash_body_right_bottom">
            <div className="dash_body_right_bottom_left">
              <PieBudgetExch data={PreguspuestGastos} />
            </div>
            <div className="dash_body_right_bottom_right">
              <DouIncomeExch data={IngresosGastos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
