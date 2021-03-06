import React from 'react'
import logo from '../assets/art-logo.png'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import LoginIcon from '@mui/icons-material/Login'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import InventoryIcon from '@mui/icons-material/Inventory'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import AddCardIcon from '@mui/icons-material/AddCard'
import AddBoxIcon from '@mui/icons-material/AddBox'
import ListAltIcon from '@mui/icons-material/ListAlt'
import './Navbar.css'

export default function Navbar() {
  const tabItems = [
    {
      content: 'הוסף פריט',
      link: '/add',
      icon: <AddCardIcon />,
      isVisible: true,
    },
    {
      content: 'רשימת פריטים',
      link: '/collections-nav',
      icon: <ListAltIcon />,
      isVisible: true,
    },
    {
      content: 'ניהול משתמשים',
      link: '/manage-users',
      icon: <PeopleAltIcon />,
      isVisible: true,
    },
    {
      content: 'כניסה/הרשמה',
      link: '/login',
      icon: <LoginIcon />,
      isVisible: true,
    },
  ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#343A40' }}>
        <Toolbar>
          <img style={{ height: '40px' }} src={logo}></img>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          {tabItems
            .filter((i) => i.isVisible)
            .map((item) => (
              <React.Fragment key={item.link}>
                <Link to={item.link}>
                  <Button style={navBtnStyle} color="inherit">
                    {item.content}
                    {item.icon}
                  </Button>
                </Link>
              </React.Fragment>
            ))}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
const navBtnStyle = {
  color: 'white',
  textTransform: 'none',
  letterSpacing: '1.2px',
  fontWeight: 'bold',
}
