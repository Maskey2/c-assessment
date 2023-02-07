import React, { useState, useEffect } from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import './../challenge3.css'
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
  background:{
    height:'100%',
  }
}));

export default function Challenge3() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const classes = useStyles();

  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          ` https://www.allbirds.com/products.json?limit=150`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
      finally {
        setLoading(false);
     }
    };
    getData();
  }, []);
  
  return (
    <div className={classes.background}>    
      {loading && <div className="loader"></div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {data &&
      <ProductCard props = {data}/>
      }
    </div>
  );
}
