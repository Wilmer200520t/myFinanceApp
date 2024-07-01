import { Card } from "flowbite-react";
import SideBar from "./components/plugins/sideBar";
import DataTableComp from "./components/plugins/table";
import { configTable } from "./data/tableInfoMapping";
function App() {
  const currentUrl = window.location.href;
  const path = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="main-content">
        <Card>
          <div className="table-header">
            <h1>{configTable(path).subtittle}</h1>
          </div>
          <div className="table-container">
            <DataTableComp path={path} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
