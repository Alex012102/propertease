// Portal.tsx
import { Outlet } from "react-router-dom";

export default function Portal() {

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
