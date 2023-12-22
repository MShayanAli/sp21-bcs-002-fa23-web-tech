import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Shop = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("/Products/allProducts")
      .then((response) => {
        setProduct(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {product.map((data, i) => (
        <div key={i} style={{ width: '300px', margin: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + `/uploads/makeup.jpeg`} style={{ height: '300px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
            <Card.Body style={{ padding: '20px' }}>
              <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{data.productName}</Card.Title>
              <h2 style={{ fontSize: '28px', color: '#ff4500', marginBottom: '10px' }}>Rs{data.price}</h2>
              <p style={{ fontSize: '16px', marginBottom: '20px' }}>{data.description}</p>
              <Button variant="primary" style={{ backgroundColor: '#ff4500', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' }}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Shop;
