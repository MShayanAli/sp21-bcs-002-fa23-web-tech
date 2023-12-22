import './App.css';
import Home from './routes/Home';
import Shop from './routes/Shop';
import About from './routes/About';
import Login from './routes/Login'
import Cart from './routes/Cart';
import Signup from './routes/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
