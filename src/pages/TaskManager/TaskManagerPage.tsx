import React from "react";
import { Link } from "react-router-dom";

import HeaderComponent from "../../components/Header/HeaderComponent"
import SwitchLayout from "../../components/SwitchLayout/SwitchLayout"
import MainProgressBox from "../../components/MainProgressBox/MainProgressBox"

import "./TaskManager.scss";

type SwitchProps = {
  design: string,
  front: string,
  back: string,
  qa: string
}

export default function TaskManagerPage() {
  const links: String[] = ['Design', 'Front-End', 'Back-End', 'QA']

  return (
    <div className="container">
      <HeaderComponent heading="Task Manager" />
      <SwitchLayout switchList={links}/>
      <div className="task-manager">
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>To Do</p>
            <p>12</p>
          </div>
          <MainProgressBox />
          <MainProgressBox />
        </div>
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>In Progress</p>
            <p>12</p>
          </div>
          <MainProgressBox />
        </div>
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>Review</p>
            <p>12</p>
          </div>
          <MainProgressBox />
        </div>
        <div className="task-manager__col">
          <div className="task-manager__stage">
            <p>Done</p>
            <p>12</p>
          </div>
          <MainProgressBox />
        </div>
      </div>
    </div>
  );
}
