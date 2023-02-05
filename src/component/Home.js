import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './../index.css'

const useStyles = makeStyles(theme => ({
       link: {
        fontSize: '20px',
        textDecoration: 'none',
        color:'#353b48',
        '&:hover': {
            color: 'darkgrey',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '12px',
        }, 
    },
    title:{
      fontSize:'50px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
      }, 
    }
}));
export default function Home() {
  const classes = useStyles();
  return (
    <Container style={{marginTop:'40px'}}>
    <h1 className={classes.title}>Assesment Dashboard</h1>
    <ul>
        <li> <Link to="/Challenge1"  className={classes.link}>Challenge #1: Button Hover</Link></li>
        <li><Link to="/Challenge2"  className={classes.link}>Challenge #2: Product Card CSS Fun</Link></li>
        <li><Link to="/Challenge3"  className={classes.link}>Challenge #3: Product Collection Gallery</Link></li>
    </ul>
    </Container>
  )
}
