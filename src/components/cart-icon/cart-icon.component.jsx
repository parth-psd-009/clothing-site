// import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemCount } =
        useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer>
            <ShoppingIcon
                className="shopping-icon"
                onClick={toggleIsCartOpen}
            />
            <ItemCount className="item-count">{cartItemCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
