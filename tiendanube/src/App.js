
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

import CartContextProvider from './components/CartContex';
import Cart from './components/Cart';

function App() {
  return (
    <>     
    <CartContextProvider>
      <BrowserRouter>    
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>  
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>} /> 
        </Routes>         
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
