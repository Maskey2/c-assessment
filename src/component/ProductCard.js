import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button, Box } from '@material-ui/core';
import { useState } from "react";
import './../challenge3.css'
import Modal from "react-modal";
import ProductDetail from './ProductDetail';

Modal.setAppElement("#root");

export default function ProductCard(props) {
  const [selectedItem, setSelectedItem] = useState();
  const [openModal, setModalOpen] = useState(false);

  const handleOnCloseModal = () => {
    setModalOpen(false);
  }
  const handleSelect = (selectedItem) => {
    setSelectedItem(selectedItem);
    setModalOpen(true);  }

  const data = props;
  const currentDate = new Date();

  for (let i = 0; i < data.props.products.length; i++) {

    //for Availability logic (NEW bade)
    let count = 0;
    let productDate = new Date(data.props.products[i].created_at);
    const dateDifference = Math.abs(productDate.getTime() - currentDate.getTime());
    const dateDifferenceNum = dateDifference / (24 * 60 * 60 * 1000); //converting into # of days
    if (dateDifferenceNum < 8) {
      data.props.products[i].newProduct = true;
    } else {
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
  //for Category/Collection filter
  data.props.sortedByCategory = {};
  let categoryArray = [...new Set(data.props.products.map(item => item.product_type))];
  categoryArray.forEach(element => {
    data.props.sortedByCategory[element] = data.props.products.filter(x => x.product_type === element);
  });

  return (
    <div>
      {
        Object.entries(data.props.sortedByCategory).map(([key, categoriesArrays]) =>
          <ul key={key} className="key-cat"><h1 className="category-name">{key}</h1>
            <Container maxWidth="lg" component="main" style={{ paddingTop: '60px' }}>
              <Grid container spacing={4} >
                {categoriesArrays &&
                  categoriesArrays.slice(0, 12).map((item, index) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4}>
                      <Card className="product-card2">

                        <div className="images" >
                          <img
                            alt={item.title}
                            src={`${item.images[0].src}`}
                            title={item.title}
                            className="cardmedia"
                          />
                          <img
                            alt={item.title}
                            src={`${item.images[1].src}`}
                            title={item.title}
                            className="cardmedia-hover"
                          />
                        </div>
                        {item.newProduct ? <span className="new-product">New</span> : null}
                        <Grid container spacing={0}>
                          <Grid item xs={9}>
                            <Typography className="product-title">{item.title}</Typography>
                            <Typography className="product-subtitle">{item.options[0].name}: {item.variants[0].title}</Typography>
                            <Typography className="product-available">{item.totalAvailable} Styles Available </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography key={4} className="product-title">${item.variants[0].price}</Typography>
                          </Grid>
                        </Grid>
                        <Grid container spacing={4} justifyContent="center" style={{ marginTop: '40px' }}>
                          <button onClick={() => handleSelect(item)} key={index} className="view-product">View More</button>
                        </Grid>
                        <CardContent >
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Container>
          </ul>
        )
      }
      <Modal isOpen={openModal} overlayClassName="overlay" onRequestClose={handleOnCloseModal}
        contentLabel="">
        <Box display="flex" justifyContent="flex-end" className="close-wrapper">
          <Button onClick={handleOnCloseModal} className="close">X</Button></Box>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <ProductDetail info={selectedItem} />
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}






