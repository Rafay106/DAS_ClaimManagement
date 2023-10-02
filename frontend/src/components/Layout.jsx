import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

function Layout() {
  return (
    <div className="home">
      <Sidebar />
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
