import React from "react";
import styled from "styled-components";
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { Row, Column } from "./Grid";

export default function ProductSample({ product }) {
  const { name, image, old_price, new_price } = product;
  return (
    <Container>
      <Column xs={6}>
        <img src={image} alt={name} />
      </Column>
      <Column xs={6}>
        <Row>
          <span className="name"> {name} </span>
        </Row>
        <Row>
          <span className="star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </span>
        </Row>
        <Row>
          <span className="prices">
            <h5>${new_price}</h5>
            <h5>
              <del>${old_price}</del>
            </h5>
          </span>
        </Row>
      </Column>
    </Container>
  );
}

ProductSample.defaultProps = {
  product: {
    id: 1,
    name: "Beat Solo2 On Ear Headphones - Black",
    new_price: 499,
    old_price: 599,
    image: "/Assets/headphone-sm.png",
    qty: 10,
    reviews: 0,
    description:
      "Lorem Ipsum is a very random tsxt that you should probably ignore, Lorem Ipsum is a very random tsxt that you should probably ignore"
  }
};

const Container = styled.div`
    width: 35rem;
    height: 16rem;
    padding: 1rem;
    .name {
      font-weight: 600;
    }
    .star {
      color: #ffc600;
    }
    span {
      display: inline-block;
      width: 100%;
      text-align: left;
      h5 {
        display: inline-block;
        margin: 0 1rem;
        color: red;
        del {
          color: #c1c8ce;
        }
      }
    }
`;
