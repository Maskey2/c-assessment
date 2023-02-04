import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
       link: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        width: '170px',
        justifyContent: 'center',
        '&:hover': {
            transform: 'scale(1.01)',
            transition: 'transform .3s ease',
            color: 'white',
        },
    },
}));
export default function Navbar() {
    const classes = useStyles();
  return (
    <AppBar position="relative" style={{backgroundColor: '#33B3A6 ',  color: 'white'}}>
        <Toolbar>
        <Typography variant="h6" >
          <Link to="/"  className={classes.link}>Home</Link>
          </Typography>
          <Typography variant="h6" >
          <Link to="/Challenge1"  className={classes.link}>Challenge 1</Link>
          </Typography>
          <Typography variant="h6" >
          <Link to="/Challenge2"  className={classes.link}>Challenge 2</Link>
          </Typography>
          <Typography variant="h6" >
          <Link to="/Challenge3"  className={classes.link}>Challenge 3</Link>
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
