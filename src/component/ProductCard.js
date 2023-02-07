import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';


export default function ProductCard(props) {
  
  const data = props;
  const currentDate = new Date();
  const handleClick=() => {
    alert('clicked')
  }
  for (let i = 0; i < data.props.products.length; i++) {
    let count = 0;
    let productDate = new Date(data.props.products[i].created_at);
    const dateDifference = Math.abs(productDate.getTime() - currentDate.getTime());
    const dateDifferenceNum = dateDifference / (24 * 60 * 60 * 1000); //converting into # of days
    if (dateDifferenceNum < 8) {
      data.props.products[i].newProduct = true;
    }else{
      data.props.products[i].newProduct = false;
    }

    const arr = data.props.products[i].variants;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].available === true) {
        count++;
      }      
    }
    data.props.products[i].totalAvailable = count;
  }
 
  data.props.sortedByCategory = {}; 

  let categoryArray = [...new Set(data.props.products.map(item => item.product_type))];
  console.log(categoryArray);  

  categoryArray.forEach(element => {
    data.props.sortedByCategory[element] = data.props.products.filter(x => x.product_type === element);
  });

  console.log(data);
  
  return (
    <div>
        {
           Object.entries(data.props.sortedByCategory).map(([key, categoriesArrays]) =>
              <ul key={key} className="key-cat"><h1>{key}</h1>
                <Container maxWidth="lg" component="main" style={{ paddingTop: '60px' }}>
                  <Grid container spacing={4} >
                    {categoriesArrays &&
                      categoriesArrays.slice(0, 12).map(({
                        id,
                        title,
                        variants,
                        images,
                        options,
                        product_type,
                        totalAvailable, newProduct
                      }) => (
                        <Grid item key={id} xs={12} sm={6} md={4}>
                          <Card className="product-card2">
                            <div className="images">
                              <img
                                alt={title}
                                src={`${images[0].src}`}
                                title={title}
                                className="cardmedia"
                              />
                              <img
                                alt={title}
                                src={`${images[1].src}`}
                                title={title}
                                className="cardmedia-hover"
                              />
                            </div>
                            {newProduct ? <span className="new-product">New</span> : null}
                            <Grid container spacing={0}>
                              <Grid item xs={9}>
                                <Typography key={variants.id} className="product-title">{title}</Typography>
                                <Typography key={variants.id} className="product-subtitle">{options[0].name}: {variants[0].title}</Typography>
                                <Typography key={variants.id} className="product-available">  {totalAvailable} Styles Available </Typography>
                              </Grid>
                              <Grid item xs={3}>
                                <Typography key={variants.id} className="product-title">${variants[0].price}</Typography>
                              </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                              <Grid item xs={12}>
                                <Typography key={variants.id} className="product-info"> {product_type}</Typography>
                              </Grid>
                            </Grid>

                            <CardContent >

                            </CardContent>

                          </Card>
                        </Grid>
                      ))}
                  </Grid>
                </Container>
                <Grid container spacing={4} justifyContent="center" style={{marginTop:'40px'}}>
                <Button variant="contained" color="primary" onClick={handleClick}> View More</Button>
                </Grid>
              </ul>                 
           )
        }        

         {
           Object.entries(data.props.sortedByCategory).map(([key, categoriesArrays]) =>
              <ul key={key} className="key-cat"><h1>{key}</h1>
                <Container maxWidth="lg" component="main" style={{ paddingTop: '60px' }}>
                  <Grid container spacing={4} >
                    {categoriesArrays &&
                      categoriesArrays.slice(0, 12).map(({
                        id,
                        title,
                        variants,
                        images,
                        options,
                        product_type,
                        totalAvailable, newProduct
                      }) => (
                        <Grid item key={id} xs={12} sm={6} md={4}>
                          <Card className="product-card2">
                            <div className="images">
                              <img
                                alt={title}
                                src={`${images[0].src}`}
                                title={title}
                                className="cardmedia"
                              />
                              <img
                                alt={title}
                                src={`${images[1].src}`}
                                title={title}
                                className="cardmedia-hover"
                              />
                            </div>
                            {newProduct ? <span className="new-product">New</span> : null}
                            <Grid container spacing={0}>
                              <Grid item xs={9}>
                                <Typography key={variants.id} className="product-title">{title}</Typography>
                                <Typography key={variants.id} className="product-subtitle">{options[0].name}: {variants[0].title}</Typography>
                                <Typography key={variants.id} className="product-available">  {totalAvailable} Styles Available </Typography>
                              </Grid>
                              <Grid item xs={3}>
                                <Typography key={variants.id} className="product-title">${variants[0].price}</Typography>
                              </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                              <Grid item xs={12}>
                                <Typography key={variants.id} className="product-info"> {product_type}</Typography>
                              </Grid>
                            </Grid>

                            <CardContent >

                            </CardContent>

                          </Card>
                        </Grid>
                      ))}
                  </Grid>
                </Container>
                <Grid container spacing={4} justifyContent="center" style={{marginTop:'40px'}}>
                <Button variant="contained" color="primary" onClick={handleClick}> View More</Button>
                </Grid>
              </ul>                 
           )
        }  
    </div>
  );
}






