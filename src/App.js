import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Head from './components/Head';
import Home from './components/Home';
import Viewcart from './components/Viewcart';
import { useState,createContext} from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';




export const cartContext =createContext();

function App() {
  const [cart,setCart]=useState([])
  
  return (
    <>
    <cartContext.Provider value={{cart,setCart}}>
    <BrowserRouter>
     <Head  cart={cart}/>
      <div className='container'>
        <Routes>
          <Route  path="/"  element={<Home cart={cart} setCart={setCart} />}/>
          <Route  path="/menu"  element={<Menu cart={cart} setCart={setCart} />}/>
          <Route  path="/Cart"  element={<Viewcart cart={cart} setCart={setCart}  />}/>
        </Routes>

      </div>
      <Footer/>
     </BrowserRouter>
    </cartContext.Provider>
     
    
    </>
    
  );
}

export default App;
