import Particle from "./Particle";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Particle />
      <Outlet />
    </>
  );
}

export default Layout;
