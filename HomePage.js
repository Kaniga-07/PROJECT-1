import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Button } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HotelManagementFeatures from './Cards';
import Footer from './Footer';
import "./HomePage.css";

const PAGES = ["About","Services", "Ambience", "Information", "Pricing", "FeedBack"];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <div className="cont" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="icon-button">
          <IconButton
            sx={{
              color: "white",
              '&:hover':
              {
                color:"blue"
              }
            }}
            onClick={() => setOpenDrawer(!openDrawer)}
            >
            <WidgetsIcon />
          </IconButton>
        </div>
         

        <div className="login-signup-buttons">
          <Link to="/LoginForm">
            <Button
              variant="outlined"
              style={{backgroundColor: 'white', color: 'blue', marginRight: '10px' }}
            >
              Login
            </Button>
          </Link>
          <Link to="/SignupForm">
            <Button
               variant="outlined"
              style={{ backgroundColor: 'white', color: 'blue' }}
            >
              SignUp
            </Button>
          </Link>
        </div>
      </div>
      <Drawer
        open={openDrawer}
        onClose={handleDrawerClose}
      >
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton
              key={index}
              component={Link}
              to={`/${page.replace(/\s+/g, '')}`}
              onClick={handleDrawerClose}
            >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary={page} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <div className="drawer-content">
        <p> HOTEL MANAGEMENT SYSTEM</p>
      </div>
      <HotelManagementFeatures />
      <Footer />
    </React.Fragment>
  );
};

export default DrawerComp;
