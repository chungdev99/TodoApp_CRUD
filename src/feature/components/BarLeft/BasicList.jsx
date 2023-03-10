import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom';
import styles from './basicList.module.scss'

export default function BasicList() {
  return (
    <Box className={styles.hidden} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <Link to='/calendar' style={{
            textDecoration: 'none',
            color: "black"
          }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="TodoList" />
              </ListItemButton>
            </ListItem>
          </Link>

          {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FormatListNumberedIcon />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
            </ListItemButton>
          </ListItem> */}

          <Link to='/' style={{
            textDecoration: 'none',
            color: "black"
          }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Student List" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to='/add' style={{
            textDecoration: 'none',
            color: "black"
          }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Add a Student" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to='/update' style={{
            textDecoration: 'none',
            color: "black"
          }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Diversity3Icon />
                </ListItemIcon>
                <ListItemText primary="Update Teams" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to='/about' style={{
            textDecoration: 'none',
            color: "black"
          }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HelpOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
          </Link>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        {/* <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List> */}
      </nav>
    </Box>
  );
}
