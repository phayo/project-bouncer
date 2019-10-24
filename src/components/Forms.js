import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaCheck } from "react-icons/fa";
import styled from "styled-components";

export function AddToCartBtn({ inCart, inForm }) {
  const [cart] = useState(inCart);
  const Btn = styled.button`
    background-color: ${({ cart }) => (!cart ? "#eaf5ff" : "#33a0ff")};
    font-size: 1.4rem;
    color: ${({ cart }) => (cart ? "#eaf5ff" : "#33a0ff")};
    border: none;
    padding: 1.5rem 1.8rem;
    border-radius: 4px;
  `;
  function updateCart(e) {
    inForm(!cart);
  }
  return (
    <Btn type="button" onClick={updateCart} cart={cart}>
      <FaShoppingCart />
      <span className="forms-addToCart-text">Add To Cart</span>
    </Btn>
  );
}
export function AddToCartBtnSm({ inCart, inForm }) {
  const [cart] = useState(inCart);
  const Btn = styled.button`
    background-color: ${({ cart }) => (!cart ? "#eaf5ff" : "#33a0ff")};
    font-size: 1.4rem;
    color: ${({ cart }) => (cart ? "#eaf5ff" : "#33a0ff")};
    border: none;
    padding: 1.5rem 1.8rem;
    border-radius: 100%;
  `;
  function updateCart(e) {
    inForm(!cart);
  }
  return (
    <Btn type="button" onClick={updateCart} cart={cart}>
      <FaShoppingCart />
    </Btn>
  );
}

export function AddToFavoriteBtn({ isLiked, inForm }) {
  const [liked] = useState(isLiked);
  const Btn = styled.button`
    background-color: ${({ cart }) => (!cart ? "#eaf5ff" : "#33a0ff")};
    font-size: 1.4rem;
    color: ${({ cart }) => (cart ? "#eaf5ff" : "#33a0ff")};
    border: none;
    padding: 1.5rem 1.8rem;
    border-radius: 4px;
  `;
  function updateLiked(e) {
    inForm(!liked);
  }
  return (
    <Btn type="button" onClick={updateLiked} liked={liked}>
      <FaHeart />
      <span className="forms-addToCart-text">Add To Favorites</span>
    </Btn>
  );
}

export function AddToFavoriteBtnSm({ isLiked, inForm }) {
  const [liked] = useState(isLiked);
  const Btn = styled.button`
    background-color: ${({ liked }) => (!liked ? "#eaf5ff" : "#33a0ff")};
    font-size: 1.4rem;
    color: ${({ liked }) => (liked ? "#eaf5ff" : "#33a0ff")};
    border: none;
    padding: 1.5rem 1.8rem;
    border-radius: 100%;
  `;
  function updateLiked(e) {
    inForm(!liked);
  }
  return (
    <Btn type="button" onClick={updateLiked} liked={liked}>
      <FaHeart />
    </Btn>
  );
}

export function AddMoreBtn() {
  const [number, setNumber] = useState(0);

  const MoreBtn = styled.div`
    padding: 1rem;
    font-weight: 600;
    color: #9e7aff;
    background-color: #f6f7f8;
    width: 11rem;
    text-align: center;
    border-radius: 4px;
    span {
      display: inline-block;
      width: 33%;
      cursor: pointer;
    }
  `;

  function decreaseClick() {
    setNumber(prev => (prev <= 0 ? prev : prev - 1));
  }
  function increaseClick() {
    setNumber(prev => (prev >= 10 ? prev : prev + 1));
  }
  return (
    <MoreBtn>
      <span className="minus" onClick={decreaseClick}>
        {" "}
        -{" "}
      </span>
      <span> {number} </span>
      <span className="plus" onClick={increaseClick}>
        {" "}
        +{" "}
      </span>
    </MoreBtn>
  );
}

export function AddVoucher() {
  const Voucher = styled.div`
    width: 36rem;
    border-radius: 4px;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
    input,
    button {
      padding: 1rem 2rem;
      width: 36rem;
    }
    input {
      width: 70%;
      border: none;
    }
    button {
      width: 30%;
      color: #fff;
      border: none;
      background-color: #33a0ff;
    }
  `;

  return (
    <Voucher>
      <input type="text" placeholder="Voucher code" />
      <button type="button">Redeem</button>
    </Voucher>
  );
}

export function Checkbox() {
  const [tick, setTick] = useState(false);
  function toggle(e) {
    e.preventDefault();
    setTick(tog => (tog ? false : true));
  }
  const CheckBox = styled.div`
    padding: 0.5rem;
    border-radius: 4px;
    text-align: center;
    display: inline-block;
    color: ${({ tick, border }) => (tick ? "#fff" : border ? border : "#000")};
    background-color: ${({ tick, border }) =>
      tick ? (border ? border : "#000") : "#fff"};
    border: 2px solid
      ${({ tick, border }) => (tick ? "none" : border ? border : "#000")};
    height: 3rem;
    width: 3rem;
  `;

  return (
    <CheckBox border="blue" onClick={toggle} tick={tick}>
      <FaCheck />
    </CheckBox>
  );
}
