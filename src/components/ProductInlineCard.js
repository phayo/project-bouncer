import React, { useState } from "react";

import styled from "styled-components";
import { FaStar, FaStarHalf } from "react-icons/fa";

import { Row, Column } from "./Grid";
import { AddToCart, AddToFavSm } from "./components";
import { Link } from "react-router-dom";

export default function ProductInlineCard({ product }) {
  const {
    name,
    new_price,
    old_price,
    image,
    reviews,
    description
  } = product;

  const [inCart, setInCart] = useState(false);
  const [isLiked, setLiked] = useState(false);

  function addToCart(param) {
    setInCart(param);
  }
  function addToLiked(param) {
    setLiked(param);
  }

  return (
    <Container>
      <Column xs={4}>
        <img src={image} alt={name} />
      </Column>
      <Column xs={8}>
        <Row>
          <h2>{name}</h2>
          <span className="star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </span>
          <span className="reviews">{`${reviews} reviews`}</span>
          <Link to="/"> Submit a review </Link>
        </Row>
        <Row>
          <h3>
            <span className="old"> ${new_price} </span>{" "}
            <del> ${old_price} </del>
          </h3>
          <p> {description} </p>
        </Row>
        <Row>
          <AddToCart inCart={inCart} inForm={addToCart}/>
          <AddToFavSm isLiked={isLiked} inForm={addToLiked} />
        </Row>
      </Column>
    </Container>
  );
}

ProductInlineCard.defaultProps = {
  product: {
    id: 1,
    name: "Beat Solo2 On Ear Headphones - Black",
    new_price: 499,
    old_price: 599,
    image: "/Assets/macbook-sm.png",
    qty: 10,
    reviews: 0,
    description:
      "Lorem Ipsum is a very random tsxt that you should probably ignore, Lorem Ipsum is a very random tsxt that you should probably ignore"
  }
};

const Container = styled.div`
  height: 25rem;
  display: flex;
  place-items: center;
  width: 90rem;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
  img {
    margin: 1rem;
  }
  a {
    text-decoration: none;
    font-weight: 600;
    :hover {
      color: royalblue;
    }
  }
  span {
    display: inline-block;
    margin-right: 2rem;
  }
  h3 {
    color: red;
    del {
      color: #c1c8ce;
    }
  }
  .reviews{
    color: #c1c8ce;
    font-weight: 600;
  }
  .star {
    color: #ffc600;
  }
  button{
      margin-right: 2rem
  }
`;
