import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import MainDashboardPage from "./pages/MainDashboard/MainDashboardPage";
import SchedulePage from "./pages/Schedule/SchedulePage";
import TaskManagerPage from "./pages/TaskManager/TaskManagerPage";
import ManagementPage from "./pages/ManagerDashboard/ManagementPage";

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
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/manager" element={<TaskManagerPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/test" element={<TestPage />} />
          </Route>
      </Routes>
    </> 
  );
  // return React.createElement('h1', {
  //   onClick: () => setCount(count + 1)
  // }, "Count: " + count)
}

export default App;
