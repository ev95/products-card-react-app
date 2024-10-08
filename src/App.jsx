import { ProductsCard } from './components/ProductsCard/ProductsCard.jsx';
import ProductPage from './components/ProductPage/ProductPage.jsx';
import Products from './components/Products/Products.jsx'
import { Header } from './components/Header/Header.jsx'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'


function App(props) {
  const [cartProducts, setCartProducts] = useState([]);

  function handleAddProductToCart(product) {
    const existItem = cartProducts.find((prod) => prod.id === product.id);

    if (existItem) {
      existItem.quantity++;
      existItem.total_price = parseFloat((existItem.price * existItem.quantity).toFixed(2));
      const extractProduct = cartProducts.filter((p) => p.id !== product.id);
      if (extractProduct.length > 0) {
        setCartProducts([
          ...cartProducts.filter((p) => p.id !== product.id),
          existItem
        ]);
      }

    } else {
      setCartProducts([
        ...cartProducts,
        product
      ]);
    }
  }

  return (
    <>
      <Header cartProductsCount={cartProducts.length} />
      <Routes>
        <Route path='/' element={
          <Products
            products_list={props.products}
            setProductToCart={handleAddProductToCart} />
        } />
        <Route path='/cart' element={<ProductsCard cardProducts={cartProducts} />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
