import React from "react";
import { Outlet } from "react-router-dom"

import HeaderComponent from "components/Header/HeaderComponent";
import SwitchSchedulePage from "components/SwitchSchedulePage/SwitchSchedulePage";

export default function SchedulePage() {
  return (
    <div className="container">
      <HeaderComponent heading="April, 2024" />
      <SwitchSchedulePage />
      <Outlet />
    </div>
  );
}