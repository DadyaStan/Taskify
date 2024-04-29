import React from "react";
import { Link, Path } from "react-router-dom";
import { Outlet } from "react-router-dom"

import HeaderComponent from "../../components/Header/HeaderComponent"
import SwitchTasksPage from "../../components/SwitchTasksPage/SwitchTasksPage"
import MainProgressBox from "../../components/MainProgressBox/MainProgressBox"

import DesignPage from "./subpages/DesignPage"
import FrontEndPage from "./subpages/FrontEndPage"
import BackEndPage from "./subpages/BackEndPage"
import QAPage from "./subpages/QAPage"


import "./TaskManager.scss";

type SwitchProps = {
  design: string,
  front: string,
  back: string,
  qa: string
}

export default function TaskManagerPage() {
  //const directions: String[] = ['Design', 'Front-End', 'Back-End', 'QA']
  //const links = ['design', 'front-end', 'back-end', 'QA']

  return (
    <div className="container">
      <HeaderComponent heading="Task Manager" />
      <SwitchTasksPage />
      <Outlet />
    </div>
  );
}
