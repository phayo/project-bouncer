import React from "react";

import styled from "styled-components";
import { FaFacebook, FaTwitter } from "react-icons/fa";

import { Column, Row } from "./Grid";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function FooterDiv() {
  return (
    <Container>
      <Row>
        <Column xs={4}>
          <h2 className="head"> Bouncer</h2>
          <p className="head-p">
            loremTempor sunt quis cupidatat et reprehenderit do labore minim
            dolore et in elit. Consectetur quis sit non officia id. Ex duis id
            magna exercitation sint laboris culpa in enim. Lorem deserunt dolore
            quis quis occaecat pariatur ad.
          </p>
        </Column>
        <Column xs={4}>
          <h4 className="follow">Follow Us</h4>
          <p>
            Proident voluptate in sunt quis sunt deserunt in eu, Proident
            voluptate in sunt quis sunt deserunt in eu
          </p>
          <div className="logo">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
          </div>
        </Column>
        <Column xs={4}>
          <h4>Contact Us</h4>
          <p>My address: Proident mollit ex occaecat minim in.</p>
          <p>+234 708 567 2235.</p>
          <p>Email: Obichike@agubanze.com</p>
        </Column>
      </Row>
      <Row>
        <Column xs={4} md={2}>
          <h4>Information</h4>
          <ul>
            <Link to="/">About Us</Link>
            <Link to="/">Information</Link>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </ul>
        </Column>
        <Column xs={4} md={2}>
          <h4>Information</h4>
          <ul>
            <Link to="/">About Us</Link>
            <Link to="/">Information</Link>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </ul>
        </Column>
        <Column xs={4} md={2}>
          <h4>Information</h4>
          <ul>
            <Link to="/">About Us</Link>
            <Link to="/">Information</Link>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </ul>
        </Column>
        <Column xs={4} md={2}>
          <h4>Information</h4>
          <ul>
            <Link to="/">About Us</Link>
            <Link to="/">Information</Link>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </ul>
        </Column>
        <Column xs={4} md={2}>
          <h4>Information</h4>
          <ul>
            <Link to="/">About Us</Link>
            <Link to="/">Information</Link>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </ul>
        </Column>
        <Column xs={4} md={2}>
          <h4>Information</h4>
          <ul>
            <Link to="/">About Us</Link>
            <Link to="/">Information</Link>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </ul>
        </Column>
      </Row>
      <Row>
        <div>2018 Ecommerce theme by www.agubanzeone.com</div>

        <div></div>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 20rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0px 0px 10px 1px rgba(207,195,207,1);
  .head {
    color: #c1c8ce;
    text-transform: uppercase;
  }
  h4, p, ul, svg{
    margin: 0 2rem;
  }
  ul {
    a {
      text-decoration: none;
      display: block;
    }
  }
  .logo {
    font-size: 2rem;
    color: #03a9f4;
    svg {
      margin-right: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem;
    .logo {
      font-size: 2rem;
    }
  }
`;
