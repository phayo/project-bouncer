import React, { useState } from "react";

import styled from "styled-components";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Column } from "./Grid";
import { AddToCartSm, AddToFavSm } from "./components";

export default function ProductGridView({ product }) {
  const { id, name, image, old_price, new_price } = product;
  const [hovered, setHovered] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [isLiked, setLiked] = useState(false);

  function putActive(e) {
    setHovered(true);
  }
  function removeActive(e) {
    setHovered(false);
  }

  function addToCart(param) {
    setInCart(param);
  }
  function addToLiked(param) {
    setLiked(param);
  }
  return (
    <Container id={id} onMouseOver={putActive} onMouseOut={removeActive}>
      <Column xs={6}>
        <img src={image} alt={name} />
        <div className={`cover ${hovered}`}>
          <AddToFavSm isLiked={isLiked} inForm={addToLiked} />
          <AddToCartSm inCart={inCart} inForm={addToCart} />
        </div>
      </Column>
      <Column xs={6}>
        <span className="name"> {name} </span>
        <span className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
        </span>
        <span className="prices">
          <h5>${new_price}</h5>
          <h5>
            <del>${old_price}</del>
          </h5>
        </span>
      </Column>
    </Container>
  );
}

ProductGridView.defaultProps = {
  product: {
    id: 1,
    name: "Apple Macbook Pro",
    new_price: 499,
    old_price: 599,
    image: "/Assets/macbook-sm.png",
    qty: 10
  }
};

const Container = styled.div`
  width: 57rem;
  height: 22.4rem;
  padding: 3rem;
  border-radius: 4px;
  font-size: 1.6rem;
  :hover {
    background-color: #fcfcfc;
  }
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      display: inline-block;
      width: 100%;
      text-align: left;
      padding: 1rem;
      h5 {
        display: inline-block;
        margin: 0 1rem;
        color: red;
        del {
          color: #c1c8ce;
        }
      }
    }
    .name {
      font-weight: 600;
    }
    .star {
      color: #ffc600;
    }
    .cover {
      position: absolute;
      display: none;
      flex-direction: row;
      place-items: center;
      height: 100%;
      width: 100%;
      background-color: #fefefeef;
      button {
        width: 5rem;
        height: 5rem;
        box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
      }
    }
    .true {
      display: flex;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 17rem;
    padding: 0rem;
    border-radius: 4px;
    font-size: 1.6rem;
  }
`;
