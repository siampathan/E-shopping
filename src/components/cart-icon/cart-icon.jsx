import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon-style";
//import "./cart-icon-style.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggoleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggoleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount> {cartCount} </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
