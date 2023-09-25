import {
  Container,
  Drawer,
  Button,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Divider,
} from "@mui/material";
import { useState } from "react";
import Iconify from "./Iconify";
import { useNavigate } from "react-router-dom";

interface IMenuDrawerItem {
  name: string;
  icon: string;
  route: string;
}

const MenuDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate(); 

  const menuDrawerItems: IMenuDrawerItem[] = [
    { name: "Dashboard", icon: "eva:layers-outline", route: "/dashboard" },
    { name: "Information", icon: "eva:info-outline", route: "/information" },
    {
      name: "Glucose Management",
      icon: "eva:color-picker-outline",
      route: "/management",
    },
    {
      name: "Emergency",
      icon: "eva:alert-triangle-outline",
      route: "/emergency",
    },
    { name: "Settings", icon: "eva:settings-2-outline", route: "/settings" },
  ];

  const sendToRoute = (route: string) => {
    navigate(route);
  }

  return (
    <Container>
      <Button onClick={() => setDrawerOpen(!drawerOpen)}><Iconify icon="eva:menu-outline" sx={{ width: 50, height: 50 }} /></Button>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
          onKeyDown={() => setDrawerOpen(false)}
        >
          <List>
            {menuDrawerItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => sendToRoute(item.route)}>
                    <ListItemIcon>
                      <Iconify icon={item.icon} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ width: 20, height: 20 }}
                    />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};

export default MenuDrawer;
