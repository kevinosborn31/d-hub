import {
  Drawer,
  Button,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  IconButton,
  Badge,
  Typography,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import Iconify from "./Iconify";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../enums/PageRoutes";

interface IMenuDrawerItem {
  name: string;
  icon: string;
  route: PageRoutes;
}

const MenuDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const menuDrawerItems: IMenuDrawerItem[] = [
    {
      name: "Dashboard",
      icon: "eva:layers-outline",
      route: PageRoutes.Dashboard,
    },
    {
      name: "Information",
      icon: "eva:info-outline",
      route: PageRoutes.Information,
    },
    {
      name: "Glucose Management",
      icon: "eva:color-picker-outline",
      route: PageRoutes.Management,
    },
    {
      name: "Emergency",
      icon: "eva:alert-triangle-outline",
      route: PageRoutes.Emergency,
    },
    {
      name: "Settings",
      icon: "eva:settings-2-outline",
      route: PageRoutes.Settings,
    },
    {
      name: "Map",
      icon: "eva:map  -outline",
      route: PageRoutes.Map,
    },
  ];

  const sendToRoute = (route: string) => {
    navigate(route);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuSelect = () => {
    setAnchorEl(null);
    navigate(PageRoutes.Profile);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button variant="contained" onClick={() => setDrawerOpen(!drawerOpen)}>
            <Iconify icon="eva:menu-outline" sx={{ width: 50, height: 50 }} />
          </Button>
          <Typography
            onClick={() => sendToRoute(PageRoutes.Dashboard)}
            variant="h6"
            noWrap
            component="div"
            sx={{ marginLeft: "20px", display: { xs: "none", sm: "block" }, cursor: "pointer" }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <Iconify icon="eva:bell-outline" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="account-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Iconify icon="eva:person-outline" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
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
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuSelect}>Profile</MenuItem>
      </Menu>
    </>
  );
};

export default MenuDrawer;
