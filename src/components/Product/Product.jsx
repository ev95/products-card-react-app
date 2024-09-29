import { useState } from 'react'
import './Product.css'


export default function Product(props) {

    const [product, setProduct] = useState(props.product);
    const [showDetails, setShowDetails] = useState(false);

    function addToCart(product) {
        props.addProductToCart(product);
    }

    return (
        <div className="product-item">
            <img src={product.image} alt="Product 1" />
            <h5>{product.title}</h5>
            <div className="price">${product.price}</div>
            {
                showDetails && <p className='product-desc'>{product.description.slice(0, 150)}...</p>
            }
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Datails' : 'Show Datails'}
            </button>
            <button onClick={() => addToCart(product)}>Add to Cart</button>

        </div>
    )
}