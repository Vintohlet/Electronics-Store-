import { ShoppingCart } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, IconButton, Toolbar, Button, Box } from "@mui/material";
import {
  HOME_PAGE,
  CATAlOG_PAGE,
  ABOUT_PAGE,
  CART_PAGE,
  PROFILE_PAGE,
  AUTH_PAGE,
} from "../utils/consts";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Header() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <AppBar position="relative" sx={{ bgcolor: "transparent" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "center", gap: 6 }}>
        <Button
          variant="text"
          size="medium"
          sx={{
            color: "black",
            fontWeight: 700,
            fontSize: "medium",
            textDecoration: "none",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Link to={HOME_PAGE} className="link">
            Main
          </Link>
        </Button>

        <Button
          variant="text"
          size="medium"
          sx={{
            color: "black",
            fontWeight: 700,
            fontSize: "medium",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Link to={CATAlOG_PAGE} className="link">
            Catalog
          </Link>
        </Button>

        <Button
          variant="text"
          size="medium"
          sx={{
            color: "black",
            fontWeight: 700,
            fontSize: "medium",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Link to={ABOUT_PAGE} className="link">
            About Us
          </Link>
        </Button>

        <IconButton>
          <Link to={CART_PAGE} className="link">
            <ShoppingCart />
          </Link>
        </IconButton>

        <IconButton>
          <Link to={isAuth ? PROFILE_PAGE : AUTH_PAGE} className="link">
            <AccountCircleIcon />
          </Link>
        </IconButton>
        <IconButton
          edge="start"
          color="black"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          variant="temporary"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box sx={{ p: 2, height: 1, backgroundColor: "white", display:"flex", flexDirection:"column",width:250 }}>
            <Button
              variant="text"
              size="medium"
              sx={{
                color: "black",
                fontWeight: 700,
                fontSize: "medium",
                textDecoration: "none",
              }}
              onClick={toggleDrawer(false)}
            >
              <Link to={HOME_PAGE} className="link">
                Main
              </Link>
            </Button>

            <Button
              variant="text"
              size="medium"
              sx={{
                color: "black",
                fontWeight: 700,
                fontSize: "medium",
              }}
              onClick={toggleDrawer(false)}
            >
              <Link to={CATAlOG_PAGE} className="link">
                Catalog
              </Link>
            </Button>

            <Button
              variant="text"
              size="medium"
              sx={{
                color: "black",
                fontWeight: 700,
                fontSize: "medium",
              }}
              onClick={toggleDrawer(false)}
            >
              <Link to={ABOUT_PAGE} className="link">
                About Us
              </Link>
            </Button>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
