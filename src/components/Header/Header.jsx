import { NavLink } from 'react-router-dom';
import './Header.css';


export function Header({ cartProductsCount }) {
    return (
        <header className="header">
            <div className='container'>
                <div className="logo">My Shop</div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="#">Products</NavLink>
                    <NavLink to="#">About</NavLink>
                    <NavLink to="#">Contact</NavLink>
                    <NavLink to="/cart" className="cart-icon">
                        <img src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-16.png" alt="cart" />
                        <span id="cartItemCount">{cartProductsCount}</span>
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}