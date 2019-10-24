import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { navData } from "../Data/headerData";

export default function NavBar() {
    const [toggled, setToggle] = useState("hide")
    function toggleNav(){
        toggled === 'hide' ? setToggle("show") : setToggle("hide");
    }
  return (
    <div className="nav">
      <Link to="/" className="nav-brand">
        Bouncer
      </Link>
      <button
        className="nav-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navList"
        aria-controls="navList"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span onClick={toggleNav} className="nav-toggler-icon">
          <FaBars />
        </span>
      </button>

      <div id="navList" className={`nav-ul nav-ul-${toggled}`}>
        <Navigation></Navigation>
      </div>
    </div>
  );
}

function Navigation({ entries = navData }) {
  const nav = Object.entries(entries);
  return (
    <ul className="nav-mainNav">
      {nav.map((item, index) => (
        <NavigationList key={item[0]} item={item} index={index} />
      ))}
    </ul>
  );
}

function NavigationList({ item, index }) {
  const [name, categories] = item;
  const categoryList = Object.entries(categories);

  return (
    <>
      <li className={`nav-mainNav-li list${index}`}>
        <span className="nav-mainNav-li-span">{name}</span>
        <div className="nav-mainNav-categories_container">
          {categoryList.map(category => (
            <NavListChild key={category[0]} category={category} index={index} />
          ))}
        </div>
      </li>
    </>
  );
}

function NavListChild({ category }) {
  const [title, lists] = category;
  return (
    <div className={`nav-mainNav-categories_container-cat`}>
      <h3 className="nav-mainNav-categories_container-cat-header">{title}</h3>
      <ul className="nav-mainNav-categories_container-cat-listitem">
        {lists.map(link => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
}
