import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import Button from "../button/button";
import CartItem from "../cart-item/cart-ite";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-drop-down-style";
//import "./cart-drop-down-style.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const gotToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage> CART EMPTY </EmptyMessage>
        )}
      </CartItems>
      <Button onClick={gotToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
