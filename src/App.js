import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import Cart from './component/Cart';
import Checkout from './component/Checkout';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
     </Routes>
    </div>
  );
}

export default App;
