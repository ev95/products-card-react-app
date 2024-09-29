import { useState } from 'react'
import './Product.css'
import { Link } from 'react-router-dom';


export default function Product(props) {

    const [product, setProduct] = useState(props.product);

    function addToCart(product) {
        props.addProductToCart(product);
    }

    return (
        <div className="product-item">
            <img src={product.image} alt="Product 1" />
            <h5>{product.title}</h5>
            <div className="price">${product.price}</div>
            <Link className='show-details' to={'/product/' + product.id} state={{ product: product }}> Show Datails</Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>

        </div>
    )
}