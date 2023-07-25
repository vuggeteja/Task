import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard";
import Grafana from "./Components/grafana";
import Login from "./Components/Login";
import Loginpage from "./Components/loginpage";
import Dynamicchart from "./Components/Dynamicchart";
import ApexChart from "./Components/grafana";
import Datatable from "./Components/trial";
import CCTVPieChart from "./Components/Health";
import CalendarChart from "./Components/calendar";
import Duphealth from "./Components/healthdup";
import Timesorttable from "./Components/TimeSortTable";
import VehicleCountChart from "./Components/vehiclecount";
import Grafan from "./Components/grafanacol";
import Sidebars from "./Components/togglebar";

function App() {

    return (
      <>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nslinfra" element={<Grafana />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dynamicchart" element={<Dynamicchart />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/apex" element={<ApexChart />} />
          <Route path="/data" element={<Datatable />} />
          <Route path="/health" element={<CCTVPieChart />} />
          <Route path="/healthdup" element={<Duphealth />} />
          <Route path="/TimeSortTable" element={<Timesorttable />} />
          <Route path="/calendar" element={<CalendarChart />} />
          <Route path="/vehicle" element={<VehicleCountChart />} />
          <Route path="/grafanacol" element={<Grafan />} />
          <Route path="/toggle" element={<Sidebars />} />
        </Routes>
      </>
    );
  }

export default App;




