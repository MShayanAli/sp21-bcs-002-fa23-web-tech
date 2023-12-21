import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  function signup(e) {
    e.preventDefault();

    let data = { name, email, password };

    axios.post('/Users/Signup', data).then((response) => {
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
        height: '60vh',
      }}
    >
      <Form onSubmit={signup} style={{ width: '300px' }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
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
          Register
        </Button>
      </Form>
    </div>
  );
}
