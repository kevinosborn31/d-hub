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

interface IMenuDrawerItem {
  name: string;
  icon: string;
  route: string;
}

const MenuDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuDrawerItems: IMenuDrawerItem[] = [
    { name: "Dashboard", icon: "eva:layers-outline", route: "/dashboard" },
    { name: "Information", icon: "eva:info-outline", route: "/information" },
    { name: "Glucose Management", icon: "eva:color-picker-outline", route: "/management" },
    { name: "Emergency", icon: "eva:alert-triangle-outline", route: "/emergency" },
    { name: "Settings", icon: "eva:settings-2-outline", route: "/settings" },
  ];

  return (
    <Container>
      <Button onClick={() => setDrawerOpen(!drawerOpen)}>Open</Button>
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
                <ListItemButton>
                  <ListItemIcon>
                    <Iconify icon={item.icon} />
                  </ListItemIcon>
                  <ListItemText primary={item.name} sx={{ width: 20, height: 20}} />
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
