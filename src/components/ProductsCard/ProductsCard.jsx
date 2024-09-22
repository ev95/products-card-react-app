import { useState, useEffect } from 'react';
import './ProductsCard.css';

export function ProductsCard({ cardProducts }) {
    const [products, setProducts] = useState(cardProducts);

    useEffect(() => {
        if (cardProducts && cardProducts.length > 0) {
            setProducts(cardProducts);
        }
    }, [cardProducts]);

    function decreaseQuantity(product) {
        if (product.quantity <= 1) return;
        const updatedProduct = {
            ...product,
            quantity: product.quantity - 1,
            total_price: parseFloat((product.price * (product.quantity - 1)).toFixed(2))
        };
        setProducts(updatedProduct);
        props.onStateChange(updatedProduct);
    }

    function increaseQuantity(product) {
        const updatedProduct = {
            ...product,
            quantity: product.quantity + 1,
            total_price: parseFloat((product.price * (product.quantity + 1)).toFixed(2))
        };
        setProducts(updatedProduct);
        props.onStateChange(updatedProduct);
    }




    console.log(products);
    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {
                products.map((product) => {
                    <div className="cart-item" key={product.id}>
                        <img src={product.title} alt="Product Image" className="product-image" />
                        <div className="product-details">
                            <h2>{product.title} </h2>
                            <p className="description">{product.description.slice(0, 100)}..</p>
                            <div className="quantity-container">
                                <button className="quantity-btn">-</button>
                                <span className="quantity">1</span>
                                <button className="quantity-btn">+</button>
                            </div>
                        </div>
                        <div className="product-price">{product.price}</div>
                        <div className="remove-item">
                            <button>Remove</button>
                        </div>
                    </div>
                })
            }

            <div className="cart-total">
                <h3>Total: $309.94</h3>
            </div>
        </div>

    )
}