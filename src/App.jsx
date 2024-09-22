import Products from './components/Products/Products.jsx'
import { Header } from './components/Header/Header.jsx'
import './App.css'
import { useState } from 'react'
import { ProductsCard } from './components/ProductsCard/ProductsCard.jsx';


function App(props) {
  const [cartProducts, SetCartProducts] = useState([]);
  const [showModal, SetShowModal] = useState(false);

  function handleAddProductToCart(product) {
    const existItem = cartProducts.find((prod) => prod.id === product.id);

    if (existItem) {
      existItem.quantity++;
      const extractProduct = cartProducts.filter((p) => p.id !== product.id);
      if (extractProduct.length > 0) {
        SetCartProducts([
          ...cartProducts.filter((p) => p.id !== product.id),
          existItem
        ]);
      }

    } else {
      SetCartProducts([
        ...cartProducts,
        product
      ]);
    }
  }

  return (
    <>
      <Header showModal={() => SetShowModal(!showModal)} cartProducts={cartProducts} />
      {showModal && <ProductsCard cardProducts={cartProducts} />}
      <Products products_list={props.products} setProductToCart={handleAddProductToCart} />
    </>
  )
}

export default App
