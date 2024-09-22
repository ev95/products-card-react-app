import './Header.css';


export function Header({ showModal }) {
    return (
        <header className="header container">
            <div className="logo">My Shop</div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <div className="cart-icon" onClick={showModal}>
                    <img src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-16.png" alt="cart" />
                    <span id="cartItemCount">0</span>
                </div>
            </nav>
        </header>
    )
}