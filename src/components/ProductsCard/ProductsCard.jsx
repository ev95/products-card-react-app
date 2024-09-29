import { useState, useEffect } from 'react';
import './ProductsCard.css';

export function ProductsCard({ cardProducts }) {
    const [products, setProducts] = useState(cardProducts);
    // const [totalPrice, setTotalPrice] = useState(0);
    let totalPrice = 0;

    function decreaseQuantity(product) {
        if (product.quantity <= 1) return;
        const updatedProduct = {
            ...product,
            quantity: product.quantity - 1,
            total_price: parseFloat((product.price * (product.quantity - 1)).toFixed(2))
        };

        setProducts([
            ...products.filter((p) => p.id !== product.id),
            updatedProduct
        ]);
    }

    function increaseQuantity(product) {
        const updatedProduct = {
            ...product,
            quantity: product.quantity + 1,
            total_price: parseFloat((product.price * (product.quantity + 1)).toFixed(2))
        };
        setProducts([
            ...products.filter((p) => p.id !== product.id),
            updatedProduct
        ]);
    }

    function removeProduct(id) {
        setProducts([
            ...products.filter((p) => p.id !== id),
        ]);
    }

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {
                products.map((product) => (
                    <div className="cart-item" key={product.id}>
                        <img src={product.image} alt="Product Image" className="product-image" />
                        <div className="product-details">
                            <h2>{product.title} </h2>
                            <p className="description">{product.description.slice(0, 100)}..</p>
                            <div className="quantity-container">
                                <button className="quantity-btn" onClick={() => decreaseQuantity(product)}>-</button>
                                <span className="quantity">{product.quantity}</span>
                                <button className="quantity-btn" onClick={() => increaseQuantity(product)}>+</button>
                            </div>
                        </div>
                        <div className="product-price">{product.total_price}</div>

                        <div className="remove-item">
                            <button onClick={() => removeProduct(product.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }

            <div className="cart-total">
                <h3>Total: {totalPrice}</h3>
            </div>
        </div>

    )
}