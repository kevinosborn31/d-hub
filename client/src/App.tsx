import React from "react";
import { Container, Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MenuDrawer from "./components/MenuDrawer";
import { DashboardPage, InformationPage, ManagementPage, SettingsPage, EmergencyPage, ProfilePage } from "./pages"
import { PageRoutes } from "./enums/PageRoutes";

const App = () => {
  return (
    <Router>
      <MenuDrawer />
      <Container>
        <Box>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path={PageRoutes.Information} element={<InformationPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
