import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Admin from './pages/Admin';
import CheckOut from './pages/CheckOut'
import { CartContextProvider } from './context/CartContext';
import Purchases from './components/Purchases/Purchases';

function App() {
  return (
    <div className="app">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/Admin' element={<Admin/>}/>            
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<ItemListContainer greetings="Bienvenidos" />} />
            <Route path="/category/:category" element={<ItemListContainer greetings="Productos" />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/purchases" element={<Purchases/>}/>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
