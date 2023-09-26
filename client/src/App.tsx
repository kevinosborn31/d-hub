import { Container, Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MenuDrawer from "./components/MenuDrawer";
import { DashboardPage, InformationPage, ManagementPage, SettingsPage, MapPage, EmergencyPage, ProfilePage } from "./pages"
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
            <Route path={PageRoutes.Management} element={<ManagementPage />} />
            <Route path={PageRoutes.Emergency} element={<EmergencyPage />} />
            <Route path={PageRoutes.Settings} element={<SettingsPage />} />
            <Route path={PageRoutes.Profile} element={<ProfilePage />} />
            <Route path={PageRoutes.Map} element={<MapPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
