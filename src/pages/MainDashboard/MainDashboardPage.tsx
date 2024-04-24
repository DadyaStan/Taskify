import React from "react";

import HeaderComponent from "../../components/Header/HeaderComponent";
import MainProgressBox from "../../components/MainProgressBox/MainProgressBox";

import "./MainDashboardPage.scss";
//попробовать убрать контейнер и сделать через <> </>
export default function MainDashboardPage() {
  return (
    <div className="container">
      <HeaderComponent />
      <div className="main-dashboard">
        <div className="main-dashboard__left-side">
          <MainProgressBox />
          <MainProgressBox />
          <MainProgressBox />
        </div>
        <div className="main-dashboard__middle-side">
          <MainProgressBox />
          <MainProgressBox />
        </div>
        <div className="main-dashboard__right-side">
          <MainProgressBox />
          <MainProgressBox />
          <MainProgressBox />
        </div>
      </div>
    </div>
  );
}