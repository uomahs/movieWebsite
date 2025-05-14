import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar  from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
