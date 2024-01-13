import React from "react";
import SingleMenu from "./SingleMenu";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utlis/cartSlice";

const Cart = () => {
  const itemDetails = useSelector((store) => store.cart.items);
  console.log(itemDetails);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Add conditional rendering or error handling if needed
  if (!itemDetails || !Array.isArray(itemDetails) || itemDetails.length === 0) {
    return (
      <div className="mt-5 text-center">
        <h1>Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="w-[70%] m-auto">
      <h1 className="text-center font-bold">Cart</h1>
      <button
        onClick={handleClearCart}
        className="px-3 py-1 bg-red-600  m-auto text-white font-semibold rounded-lg"
      >
        Clear Cart
      </button>
      {itemDetails.map((item, index) => (
        <SingleMenu singlemenuName={item} />
      ))}
    </div>
  );
};

export default Cart;
