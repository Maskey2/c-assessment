import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Showerbg from './../assets/imgs/shower-bg.jpg';
import Foambg from './../assets/imgs/foam-bg.jpg';
import Sweetbg from './../assets/imgs/fluffy-bg.jpg';
import Shower from './../assets/imgs/shower-product.png';
import Foam from './../assets/imgs/fluffy-product.png';
import Sweet from './../assets/imgs/foam-product.png';
import './../challenge2.css'


const useStyles = makeStyles((theme) => ({
  background:{
    height:'93.5vh',
    backgroundColor:'#f1f0ef',
    [theme.breakpoints.down('sm')]: {
      height:'auto',
    }, 
  },
  info:{
    verticalAlign:'middle',
    fontSize:'22px',
    lineHeight:'1'
  },
}));

const product = [
  {
    title: 'Shower Foam',
    bgSrc:Showerbg,
    bsrc:Shower,
    subheader: 'Motivation and focus*',
    price:'50.00',
    subscribePrice:'42.50',
    buttonText: 'Add to cart',
    keyIng:'Key Ingredients:',
    keyValue:'Warm Sugar, Vanilla, Fresh Pancakes',
    buttonstyle:'#eeea8c'
  },
  {
    title: 'Sea Foam',
    bgSrc:Foambg,
    bsrc:Sweet,
    subheader: 'Connection and joy*',
    price:'50.00',
    subscribePrice:'42.50',
    buttonText: 'Add to cart',
    keyIng:'Key Ingredients:',
    keyValue:'Sea Salt, beach Water, Fresh Coconut, Sprinkles',
    buttonstyle:'#b0eaeb'
  },
  {
    title: 'Sweet Fluffy',
    bgSrc:Sweetbg,
    bsrc:Foam,
    subheader: 'Deep, restorative sleep*',
    price:'50.00',
    subscribePrice:'42.50',
    buttonText: 'Add to cart',
    keyIng:'Key Ingredients:',
    keyValue:'Fresh Berries, Rainbow Sprinkles, Fairy Floss',
    buttonstyle:'#ffc0b2'
  },
];

export default function Challenge2() {
  const classes = useStyles();

  return (
    <div className={classes.background}>     
      <Container maxWidth="md" component="main" style={{paddingTop:'60px'}}>
        <Grid container spacing={5} >
          {product.map((product) => (
            <Grid item key={product.title} xs={12} sm={6} md={4}>
              <Card className="product-card">             
                <CardMedia
                    component="img"
                    alt={product.ttile}
                    height="200"
                    image={product.bgSrc}
                    title={product.ttile}
                  />
                  <img src={product.bsrc} className="mainimg" alt="Product Image"/>
                <Typography className="product-title">{product.title}</Typography>
                <Typography  className="product-subtitle">{product.subheader}</Typography>
                <CardContent >
                    <span style={{fontFamily: "HafferXH-Bold"}}> {product.keyIng} </span>
                    <span style={{fontFamily: "HafferXH-Regular"}}>  {product.keyValue}  </span>                 
                </CardContent>
                <CardActions>
                  <button className="addToCart2">
                    {product.buttonText}  <span className="line"></span>  ${product.price} </button>
                </CardActions>
                <CardActions style={{marginBottom:'20px'}}>
                  <button className="btnSubscribe" style={{backgroundColor:`${product.buttonstyle}`}}>
                    <span className={classes.info}> &#9432; </span>Subscribe  <span className="line"></span>  ${product.subscribePrice}
                  </button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </div>
  );
}