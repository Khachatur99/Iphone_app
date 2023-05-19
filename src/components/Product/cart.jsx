import React from "react";

export default function Cart({ cart }) {
  return (
    <>
      {cart.title}
      <img src={cart.image} alt="" />
    </>
  );
}
