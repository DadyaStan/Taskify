import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import MainDashboardPage from "./pages/MainDashboard/MainDashboardPage";
import TaskManagerPage from "./pages/TaskManager/TaskManagerPage";
import SchedulePage from "./pages/Schedule/SchedulePage";
import ManagementPage from "./pages/ManagerDashboard/ManagementPage";

import DesignPage from "./pages/TaskManager/subpages/DesignPage"
import FrontEndPage from "./pages/TaskManager/subpages/FrontEndPage"
import BackEndPage from "./pages/TaskManager/subpages/BackEndPage"
import QAPage from "./pages/TaskManager/subpages/QAPage"

import TestPage from "./pages/TestPage";

import Layout from "./components/Layout";

// App.js устанавливает аутентификацию и маршрутизацию
// Отсмотреть, почему здесь <> </> тег
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainDashboardPage />} />
          <Route path="manager/*" element={<TaskManagerPage />}>
            <Route path="design" element={<DesignPage />} />
            <Route path="front-end" element={<FrontEndPage />} />
            <Route path="back-end" element={<BackEndPage />} />
            <Route path="qa" element={<QAPage />} />
          </Route>
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="management" element={<ManagementPage />} />
          <Route path="test" element={<TestPage />} />
        </Route>
      </Routes>
    </>
  );
  // return React.createElement('h1', {
  //   onClick: () => setCount(count + 1)
  // }, "Count: " + count)
}

export default App;
