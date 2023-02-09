import React from 'react'
import './../challenge3.css'
import { Container, Grid, Typography } from '@material-ui/core';
import { useState } from "react";

export default function ProductDetail(props) {
  const featuredImage = props.info.images;
  const title = props.info.title;
  const [mainImage, setmainImage] = useState(featuredImage[0].src); //adding this as main image 

  const handleSelect = (event, item) => {
    setmainImage(item.src);
  }

  return (
    <Container maxWidth="lg" component="main" style={{ paddingTop: '60px' }}>
      <Grid container spacing={4} justifyContent="center">
        <img src={`${mainImage}`} alt={mainImage} className="main-variant-img" />
      </Grid>
      <Typography component="h2" className="prod-title">{title}</Typography>
      <Grid container spacing={4} justifyContent="center" className="image-wrapper">
        {featuredImage.map((item) =>
          <img key={item.id} src={`${item.src}`} className="variant-img" onClick={(e) => handleSelect(e, item)} />
        )}
      </Grid>
    </Container>
  )
}
