import "./MainLayout.css";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main className="main theme-background">
      <Outlet />
    </main>
  );
}
