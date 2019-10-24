import React, { useState } from "react";

import { FaUser, FaShoppingBasket, FaSearch, FaTimes } from "react-icons/fa";
import { languages, currencies } from "../Data/headerData";
import { Row, Column } from "./Grid";

const goods = [
    // {
    //     name: "iphone 11",
    //     price: 600
    // },
    // {
    //     name: "iphone 11",
    //     price: 600
    // }
]

function SelectOpt({ key, val }) {
  return <option value={key}>{val}</option>;
}

function SelectElem({ options, selected }) {
  const [opts] = useState(options);
  const [active, setActive] = useState(selected);
  function handleChange(e) {
    console.log(e.target.value);
    setActive(e.target.value);
  }
  return (
    <select
      onChange={handleChange}
      className="header-top-select"
      value={active}
    >
      {opts.map(option => (
        <SelectOpt key={option} val={option} />
      ))}
    </select>
  );
}

function CartDropdown({ cartitems = [], removeFromCart=alert }) {
  function handleClick(e) {
    removeFromCart(e.target.value);
  }
  return (
    <div className="header-cart">
      <div>
        {cartitems.map(item => (
          <Row id={cartitems.indexOf(item)}>
            <Column sm="9">
              <div>{item.name}</div>
              <div>{`$${item.price}`}</div>
            </Column>
            <Column onClick={handleClick} sm="3">
              <FaTimes />
            </Column>
          </Row>
        ))}
      </div>
      <div className="header-cart-div">
        <button className="header-cart-div-btn" type="button">
          Cancel
        </button>
        <button className="header-cart-div-btn" type="button">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default function HeaderComp({ cart = goods }) {
    const [cartItems] = useState(cart);
    const sty = cartItems.length > 0 ? 'active' : 'default';
    const [style] = useState(sty);
  const price =
    Math.trunc(cartItems.reduce((acc, item) => (acc += item.price), 0) * 100) /
    100;


  return (
    <div className={`header header-${style}`}>
      <div className="header-right">
        <SelectElem options={languages} selected={languages[0]} />
        <SelectElem options={currencies} selected={currencies[0]} />
      </div>

      <div className="header-left">
        <div className="">
          <FaUser></FaUser>
          <span>My Profile</span>
        </div>
        <div className="header-right">
          <FaShoppingBasket></FaShoppingBasket>
          <span>{cartItems.length} - items</span>
          <span style={{ "margin-left": "2rem" }}>${price}</span>
          <div className="header-dropdown">
            <CartDropdown cartItems={cartItems} />
          </div>
        </div>
        <div>
          <FaSearch />
        </div>
      </div>
    </div>
  );
}
