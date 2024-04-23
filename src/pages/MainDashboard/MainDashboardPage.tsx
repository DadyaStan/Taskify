import React from "react";

import HeaderComponent from "../../components/Header/HeaderComponent";

import "./MainDashboardPage.scss";
//попробовать убрать контейнер и сделать через <> </>
export default function MainDashboardPage() {
  return (
    <div className="container">
      <HeaderComponent />
      <div className="main-dashboard">
        <div className="main-dashboard__left-side">
          <div className="info-box">
            block 1
          </div>
          <div className="info-box">
            block 2
          </div>
          <div className="info-box">
            block 3
          </div>
        </div>
        <div className="main-dashboard__middle-side">
          <div className="info-box">
            block 4
          </div>
          <div className="info-box">
            block 5
          </div>
        </div>
        <div className="main-dashboard__right-side">
          <div className="info-box">
            block right 1
          </div>
          <div className="info-box">
            block right 2
          </div>
          <div className="info-box">
            block right 3
          </div>
        </div>
      </div>
    </div>
  );
}