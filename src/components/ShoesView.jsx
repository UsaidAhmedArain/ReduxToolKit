import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderShoes, cancelShoes } from "../Features/Shoes/shoesSlice";
const ShoesView = () => {
  const availableStock = useSelector((state)=> state.shoes.stock)
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Number Of Shoes - {availableStock}</h1>
      <div className="flex justify-center gap-5 mt-4">
        <button
          className="bg-indigo-600 text-xs text-white py-2 px-2"
          onClick={() => dispatch(orderShoes())}
        >
          Place Order
        </button>
        <button
          className="bg-indigo-600 text-xs text-white py-2 px-2"
          onClick={() => dispatch(cancelShoes())}
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default ShoesView;
