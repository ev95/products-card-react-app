import { useLocation } from "react-router-dom";
import './ProductPage.css'

function ProductPage() {

    let { state } = useLocation();
    console.log(state.product);
    return (
        <div className="product-details-container">
            <div className="product-image-container">
                <img src={state.product.image} alt="Product Image" className="product-image" />
            </div>
            <div className="product-info-container">
                <h1 className="product-title">{state.product.title}</h1>
                <p className="product-description">
                    {state.product.description}
                </p>
                <p className="product-category">
                    <b>Category:</b > {state.product.category}
                </p>
                <div className="product-rating">
                    <span className="rating-stars">
                        ★★★★☆
                    </span>
                    <span className="rating-value">{state.product.rating.rate}</span>
                    <span className="rating-count">({state.product.rating.count})</span>
                </div>

                <div className="product-price-container">
                    <span className="product-price">${state.product.price}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductPage