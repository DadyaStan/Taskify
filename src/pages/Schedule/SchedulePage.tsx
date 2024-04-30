import React from "react";
import { Outlet } from "react-router-dom";

import HeaderComponent from "components/Header/HeaderComponent";
import SwitchSchedulePage from "components/SwitchSchedulePage/SwitchSchedulePage";

import moment from "moment";

const today = moment().format('LL');

export default function SchedulePage() {
  return (
    <div className="container">
      <HeaderComponent heading={today} />
      <SwitchSchedulePage />
      <Outlet />
    </div>
  );
}