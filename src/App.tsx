import { NavLink, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Employees from "./Employees/Employees";
import Main from "./Main/Main";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NavLink style={{ marginRight: "10px" }} to={"/main"}>
          Main
        </NavLink>
        <NavLink to={"/employees"}>Employees</NavLink>
      </div>
      <Routes>
        <Route path={"/main"} element={<Main />} />
        <Route path={"/employees"} element={<Employees />} />
      </Routes>
    </>
  );
}

export default App;
