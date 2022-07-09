import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import Button from "../button/button";
import CartItem from "../cart-item/cart-ite";
import "./cart-drop-down-style.scss";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const gotToCheckoutHandler = () => {
        navigate("/checkout");
    };
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem cartItem={item} key={item.id} />
                ))}
            </div>
            <Button onClick={gotToCheckoutHandler}>Checkout</Button>
        </div>
    );
};

export default CartDropdown;
