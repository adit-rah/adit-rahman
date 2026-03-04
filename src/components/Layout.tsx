import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="dark antialiased">
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </div>
  );
}
