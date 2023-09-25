import React from "react";
import { Container, Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MenuDrawer from "./components/MenuDrawer";
import DashboardPage from "./pages/DashboardPage";
import InformationPage from "./pages/InformationPage";
import ManagementPage from "./pages/ManagementPage";
import EmergencyPage from "./pages/EmergencyPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <Router>
      <Container>
        <MenuDrawer />
        <Box>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/information" element={<InformationPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
