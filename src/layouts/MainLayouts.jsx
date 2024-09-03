import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useAuth } from "../context/AuthContext";
import { Outlet } from "react-router-dom";

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
      { name: "SubMetric1", href: "/metricaz/sub1" },
      { name: "SubMetric2", href: "/metricaz/sub2" },
    ],
  },
  {
    name: "REPORTES",
    href: "#",
    subPages: [
      { name: "SubReporte1", href: "/reportes/sub1" },
      { name: "SubReporte2", href: "/reportes/sub2" },
    ],
  },
  {
    name: "PROYECTOS",
    href: "#",
    subPages: [
      { name: "SubProyecto1", href: "/proyectos/sub1" },
      { name: "SubProyecto2", href: "/proyectos/sub2" },
    ],
  },
  {
    name: "HERRAMIENTAS",
    href: "#",
    subPages: [
      { name: "SubHerramienta1", href: "/herramientas/sub1" },
      { name: "SubHerramienta2", href: "/herramientas/sub2" },
    ],
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const MainLayout = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);
  const [subPages, setSubPages] = useState([]);
  const { userEmail } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenSubMenu = (event, subPages) => {
    setAnchorElSubMenu(event.currentTarget);
    setSubPages(subPages);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setAnchorElSubMenu(null); // Cierra también el submenú cuando se cierra el menú principal
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseSubMenu = () => {
    setAnchorElSubMenu(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
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

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <div key={page.name}>
                    <MenuItem
                      onClick={
                        page.subPages.length > 0
                          ? (e) => handleOpenSubMenu(e, page.subPages)
                          : handleCloseNavMenu
                      }
                      component="a"
                      href={page.href}
                    >
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  </div>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={
                    page.subPages.length > 0
                      ? (e) => handleOpenSubMenu(e, page.subPages)
                      : handleCloseNavMenu
                  }
                  sx={{ my: 2, color: "black", display: "block" }}
                  href={page.href}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
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
              {/* Submenu for subPages */}
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
                    component="a"
                    href={subPage.href}
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
