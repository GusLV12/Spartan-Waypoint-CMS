import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import AdbIcon from "@mui/icons-material/Adb";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";
import { Link as RouterLink, Outlet } from "react-router-dom";
import { Link as MUILink, List, MenuItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

const pages = [
  {
    name: "INICIO",
    href: "/",
    subPages: [],
  },
  {
    name: "METRICAZ",
    href: "#",
    subPages: [
      { name: "Asistencia", href: "/metric/attendance" },
      { name: "Conversión", href: "/metric/conversion" },
      { name: "Gamificación", href: "/metric/gamification" },
    ],
  },
  {
    name: "REPORTES",
    href: "#",
    subPages: [
      { name: "Nuevo reporte", href: "/reports/new" },
      { name: "Historial", href: "/reports/history" },
    ],
  },
  {
    name: "PROYECTOS",
    href: "#",
    subPages: [
      { name: "Contexto Millonario", href: "/projects/context" },
      { name: "Cash Flow", href: "/projects/cash" },
      { name: "Beyond Weather", href: "/projects/beyond" },
      { name: "Bussines leader", href: "/projects/bussines" },
    ],
  },
  {
    name: "HERRAMIENTAS",
    href: "#",
    subPages: [
      { name: "Mails", href: "/tools/mails" },
      { name: "Llamadas", href: "/tools/calls" },
      { name: "Whatsapp", href: "/tools/wp" },
      { name: "SMS", href: "/tools/sms" },
      { name: "Código QR", href: "/tools/codeqr" },
    ],
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const MainLayout = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);
  const [subPages, setSubPages] = useState([]);
  const [open, setOpen] = useState(false); // Estado para el Drawer
  const [collapseStates, setCollapseStates] = useState({});
  const { userEmail } = useAuth();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Detectar pantalla pequeña

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenSubMenu = (event, subPages) => {
    setAnchorElSubMenu(event.currentTarget);
    setSubPages(subPages);
  };

  const handleCloseSubMenu = () => {
    setAnchorElSubMenu(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Toggle collapse state for a specific menu
  const toggleCollapse = (index) => {
    setCollapseStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      {/* Icono para cerrar el Drawer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 1,
          backgroundColor: "#001937",
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          <FormatAlignRightIcon sx={{ color: "#ffff" }} />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {pages.map((page, index) => (
          <div key={page.name}>
            <ListItem disablePadding>
              <ListItemButton
                component={RouterLink}
                to={page.href}
                onClick={
                  page.subPages.length > 0
                    ? () => toggleCollapse(index)
                    : handleDrawerClose
                }
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={page.name} />
                {page.subPages.length > 0 &&
                  (collapseStates[index] ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>

            {/* Submenu for collapsible pages */}
            {page.subPages.length > 0 && (
              <Collapse in={collapseStates[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {page.subPages.map((subPage) => (
                    <ListItemButton
                      key={subPage.name}
                      sx={{ pl: 4 }}
                      component={RouterLink}
                      to={subPage.href}
                      onClick={handleDrawerClose} // Cierra el Drawer al hacer clic en una subpágina
                    >
                      <ListItemText primary={subPage.name} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="2xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            {/* Menú para pantallas pequeñas */}
            {isSmallScreen ? (
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                {/* Botón para abrir el Drawer */}
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-drawer"
                  aria-haspopup="true"
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon sx={{ color: "#001e41" }} />
                </IconButton>

                {/* Drawer que contiene las opciones del menú */}
                <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
                  {DrawerList}
                </Drawer>
              </Box>
            ) : (
              // Menú para pantallas grandes
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <MUILink
                    component={RouterLink}
                    key={page.name}
                    underline="none"
                    onClick={
                      page.subPages.length > 0
                        ? (e) => handleOpenSubMenu(e, page.subPages)
                        : handleCloseSubMenu
                    }
                    sx={{ m: 1, color: "black", display: "block", gap: 3 }}
                    to={page.href}
                  >
                    {page.name}
                  </MUILink>
                ))}
              </Box>
            )}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Typography variant="body2" color="inherit">
                {userEmail}
              </Typography>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              {/* Submenú para subPages */}
              <Menu
                sx={{ mt: "45px" }}
                id="submenu-appbar"
                anchorEl={anchorElSubMenu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElSubMenu)}
                onClose={handleCloseSubMenu}
              >
                {subPages.map((subPage) => (
                  <MenuItem
                    key={subPage.name}
                    onClick={handleCloseSubMenu}
                    component={RouterLink}
                    to={subPage.href}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {subPage.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
