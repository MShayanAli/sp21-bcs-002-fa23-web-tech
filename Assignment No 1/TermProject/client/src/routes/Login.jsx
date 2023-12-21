import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  function signin(e) {
    e.preventDefault();

    let data = { email, password };

    axios.post('/Users/Login', data).then((response) => {
        console.log(response);
        if(response.status===200)
        {
          navigate("/");

        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
      }}
    >
      <Form onSubmit={signin} style={{ width: '300px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          type="submit"
          style={{
            backgroundColor: '#ff4500',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            fontWeight: 'bold',
            width: '100%',
          }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
