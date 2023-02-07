import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './../challenge1.css'

const useStyles = makeStyles((theme) => ({
    background:{
        height:'93.5vh',
        backgroundColor:'#c3f63F',
    }   
  }));
export default function Challenge1() {
    const classes = useStyles();
  return (
    <div className={classes.background}>
    <Container className="wrapper">
    <h1 style={{paddingBottom:'60px'}}>Challenge #1: Button Hover</h1>
    <button className="addToCart"> ADD TO CART</button>
    </Container>
    </div>
  )
}
