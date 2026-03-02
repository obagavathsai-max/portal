/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Marks from './pages/Marks';
import Grades from './pages/Grades';
import FeeDetails from './pages/FeeDetails';
import UpdateAccount from './pages/UpdateAccount';
import Profile from './pages/Profile';
import ABCIDMaster from './pages/ABCIDMaster';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="marks" element={<Marks />} />
            <Route path="grades" element={<Grades />} />
            <Route path="fee-details" element={<FeeDetails />} />
            <Route path="update-account" element={<UpdateAccount />} />
            <Route path="profile" element={<Profile />} />
            <Route path="abcid-master" element={<ABCIDMaster />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
