import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
} from "./cart-dropdown.styles";
// import "./cart-dropdown.styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };
    const { cartItems } = useContext(CartContext);
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is Empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
