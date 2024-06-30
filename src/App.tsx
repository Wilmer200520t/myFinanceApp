import { Card } from "flowbite-react";
import SideBar from "./components/plugins/sideBar";
import DataTableComp from "./components/plugins/table";

function App() {
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="main-content">
        <Card>
          <div className="table-header">
            <h1>Cuentas</h1>
          </div>
          <div className="table-container">
            <DataTableComp path="Character" />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
