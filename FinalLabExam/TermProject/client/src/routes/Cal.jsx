import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Cal(){
  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState([]);
 
    const calculate = async () => {
        try {
          const response = await axios.post("/Cal/Calculate", {op1,op2,operation,});
        
          if (response.status===200) {
            const newResult = [...result, { op1, op2, operation, result: response.data.result }];
            setResult(newResult);
          }
        } catch (error) {
          console.error("Error", error);
        }
      };
      
      return(
        
        <Form onSubmit={calculate} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Operand 1</Form.Label>
        <Form.Control type="number" placeholder="Enter Value" onChange={(e) => setOp1(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Operation</Form.Label>
        <Form.Control type="text" placeholder="Enter + OR - OR * OR /" onChange={(e) => setOperation(e.target.value)} />
      </Form.Group>

      {/* <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" onChange={(e) => setOperation(e.target.value)}> 
        Operation
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>+</Dropdown.Item>
        <Dropdown.Item>-</Dropdown.Item>
        <Dropdown.Item>*</Dropdown.Item>
        <Dropdown.Item>/</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown> */}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Operand 2</Form.Label>
        <Form.Control type="number" placeholder="Enter Value" onChange={(e) => setOp2(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

      <Button variant="primary" type="submit">
        Calculate
      </Button>
    </Form>
      )

}
// function BasicExample() {
//   // const [op1, setOp1] = useState('');
//   // const [operation,setOperation] = useState('')
//   // const [op2, setOp2] = useState('');
//   // const [result, setResult] = useState([]);
//   // const navigate = useNavigate();


//   const formStyle = {
//     maxWidth: '400px',
//     margin: 'auto',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   };

//   const dropdownStyle = {
//     marginBottom: '15px', // Adjust the spacing between dropdown and other elements
//   };
//   function calculate(e) {
//     e.preventDefault();

//     let data = { op1, operation, op2  };

//     axios.post('/Cal/Calculate', data).then((response) => {
//         console.log(response);
//         if(response.status===200)
//         {
//           navigate("/");
//         }
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }


//   return (
//     <Form onSubmit={calculate} style={formStyle}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Operand 1</Form.Label>
//         <Form.Control type="number" placeholder="Enter Value" onChange={(e) => setOp1(e.target.value)} />
//       </Form.Group>

//       {/* <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Operation</Form.Label>
//         <Form.Control type="text" placeholder="Enter + OR - OR * OR /" onChange={(e) => setOperation(e.target.value)} />
//       </Form.Group> */}

//       <Dropdown style={dropdownStyle}>
//       <Dropdown.Toggle variant="success" id="dropdown-basic" onChange={(e) => setOperation(e.target.value)}> 
//         Operation
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item>+</Dropdown.Item>
//         <Dropdown.Item>-</Dropdown.Item>
//         <Dropdown.Item>*</Dropdown.Item>
//         <Dropdown.Item>/</Dropdown.Item>
//       </Dropdown.Menu>
//       </Dropdown>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Operand 2</Form.Label>
//         <Form.Control type="number" placeholder="Enter Value" onChange={(e) => setOp2(e.target.value)} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

//       <Button variant="primary" type="submit">
//         Calculate
//       </Button>
//     </Form>
//   );
// }

// export default BasicExample;
