import React from "react";
import styled from "styled-components";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Row, Column } from "../../components/Grid";

export default function Banner() {
  return (
    <>
      <Container>
        <span>
          <FaAngleLeft />
        </span>
        <div>
          <TextDiv>
            <h2>iPhone X</h2>
            <p>
              Lorem Ipsum is merely a placeholder text and you should probably
              stop reading Lorem Ipsum is merely a placeholder text Lorem Ipsum
              is merely a placeholder text
            </p>
            <MoreBtn cursor="pointer">MORE</MoreBtn>
          </TextDiv>
        </div>
        <div className="iphonex">
          <img alt="iphone" src="/Assets/bigIphone.png" />
        </div>
        <span>
          <FaAngleRight />
        </span>
      </Container>
      <SubBanner>
        <Row>
          <Column xs={4}>
            <div className="iphne6">
              <div className="iphne6cont">
                <img src="/Assets/iphone6.png" alt="iphone6" />
              </div>
              <div>
                <h2>Iphone 6</h2>
                <p>
                  Sint cillum aute enim esse.Et commodo eiusmod in adipisicing
                  est qui tempor.
                </p>
                <p className="amt">$399</p>
              </div>
            </div>
          </Column>
          <Column xs={4}>
          <div className="oculus">
              <div className="">
                <img src="/Assets/oculus.png" alt="gopro6" />
              </div>
              <div>
                <h2>GoPro Hero 6</h2>
                <p className="amt">$299</p>
              </div>
            </div>
          </Column>
          <Column xs={4}>
          <div className="gopro">
              <div className="">
                <img src="/Assets/vidcamsmall.png" alt="gopro6" />
              </div>
              <div>
                <h2>GoPro Hero 6</h2>
                <p>
                  Sint cillum aute enim esse.Et commodo eiusmod in adipisicing
                  est qui tempor.
                </p>
                <p className="amt">$299</p>
              </div>
            </div>
          </Column>
        </Row>
      </SubBanner>
    </>
  );
}

const Container = styled.div`
  padding: 0 20rem;
  display: flex;
  place-items: center;
  background-image: linear-gradient(to right, #ff4858, #8f65ff);
  span {
    font-size: 4rem;
    margin: 0 2rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 1rem;
    display: block;
    position: relative;
    span {
      display: none;
    }
    .iphonex {
      width: 100%;
      height: 22rem;
      position: absolute;
      top: 0;
      z-index: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const TextDiv = styled.div`
  height: 100%;
  color: #fff;
  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
    p {
      width: 40%;
    }
  }
`;

const MoreBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5rem;
  border-bottom: 0.3rem solid #fff;
  text-transform: uppercase;
  cursor: pointer;
  margin: 4rem 0;
  font-weight: 600;
  color: #fff;
`;

const SubBanner = styled.div`
  width: 60%;
`;
