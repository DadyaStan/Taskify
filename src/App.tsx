import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import MainDashboardPage from "./pages/MainDashboard/MainDashboardPage";
import SchedulePage from "./pages/SchedulePage";
import TaskManagerPage from "./pages/TaskManagerPage";
import ManagementPage from "./pages/ManagementPage";

import Layout from "./components/Layout";

// App.js устанавливает аутентификацию и маршрутизацию
function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainDashboardPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/manager" element={<TaskManagerPage />} />
            <Route path="/management" element={<ManagementPage />} />
          </Route>
      </Routes>
    </> 
  );
  // return React.createElement('h1', {
  //   onClick: () => setCount(count + 1)
  // }, "Count: " + count)
}

export default App;
