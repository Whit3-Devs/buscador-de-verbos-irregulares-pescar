import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import imgLogoAb from "../assets/logo/logoab.png";


const pages = ["Products", "Pricing", "Blog"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="https://www.linkedin.com/in/blanco-augusto-r/"
            target="_blank"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "sans-serif ",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={imgLogoAb}
              alt="Logo de augusto blanco"
              sx={{
                height: "45px",
              }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  component="a"
                  href="https://github.com/Whit3-Devs"
                  target="_blank"
                  textAlign="center"
                  sx={{
                    fontFamily: "sans-serif ",
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    color: "inherit",
                  }}
                >
                <GitHubIcon sx={{mr: '10px'}} />
                  Github
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                      component="a"
                  href="https://www.linkedin.com/in/blanco-augusto-r/"
                  target="_blank"
                  textAlign="center"
                  sx={{
                    fontFamily: "sans-serif ",
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    color: "inherit",
                  }}
                >
                <LinkedInIcon sx={{mr: '10px'}}/>
                  Linkedin
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="https://www.linkedin.com/in/blanco-augusto-r/"
            target="_blank"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "sans-serif ",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={imgLogoAb}
              alt="Logo de augusto blanco"
              sx={{
                height: "45px",
              }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                ml: 3,
                color: "white",
                // display: "block",
                fontFamily: "sans-serif ",
              }}
              startIcon={<GitHubIcon />}
            >
              <Typography
                component="a"
                href="https://github.com/Whit3-Devs"
                target="_blank"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "sans-serif ",
                  fontWeight: 400,
                  color: "inherit",
                  textDecoration: "none",
                  textTransform: "capitalize"
                }}
                
              >
                Github
              </Typography>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                ml: 3,
                color: "white",
                // display: "block",
                fontFamily: "sans-serif ",
              }}
              startIcon={<LinkedInIcon />}
            >
              <Typography
                component="a"
                href="https://github.com/Whit3-Devs"
                target="_blank"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "sans-serif ",
                  fontWeight: 400,
                  color: "inherit",
                  textDecoration: "none",
                  textTransform: "capitalize"
                }}
              >
                Linkedin
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
