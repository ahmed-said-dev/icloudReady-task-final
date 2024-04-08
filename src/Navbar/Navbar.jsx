import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import person4 from "../images/person4.png";
import img_3 from "../images/+3.png";
import Vector from "../images/Vector.png";
import Ellipse from "../images/Ellipse.png";
import kitchen_img from "../images/kitchen_img.png";
import cart_img from "../images/cart_img.png";
import "./Navbar.css";

function Logo() {
  return (
    <Link className="navbar-brand text-decoration-none" to="#">
      <h5 className="d-flex flex-column">
        Welcome to iCloudReady!
        <span className="text-muted fs-6 mt-1">
          You have started your 30 day trial
        </span>
      </h5>
    </Link>
  );
}

function Profile() {
  return (
    <div className="mx-3 me-5 position-relative ">
      <img className="w-100 person1" src={person1} alt="mage18png" />
      <img className="w-100 person2" src={person2} alt="mage17png" />
      <img className="w-100 person3" src={person3} alt="mage16png" />
      <img className="w-100 person4" src={person4} alt="mage15png" />
      <img className="w-100 Vector" src={Vector} alt="Vectorpng" />
      <img className="w-100 Ellipse" src={Ellipse} alt="Ellipse42png" />
      <img className="img_3" src={img_3} alt="img" />
    </div>
  );
}

function HelpSection() {
  return (
    <div className="ms-5 ps-5">
      <a className=" text-decoration-none" to="#">
        <h6 className="d-flex flex-column text-muted">
          Our architects are here to help
          <span id="booking" className="text-muted fs-6 mt-1 ">
            Book a free session
          </span>
        </h6>
      </a>
    </div>
  );
}

function CartIcon() {
  const { cart, toggleCart, setToggleCart, kitchen, toggleKitchen, setToggleKitchen } = useContext(Context);

  const cart_toggle = toggleCart ? "d-none" : "";
  const handleCartClick = () => {
    setToggleCart(true);
  };
  const kitchen_toggle = toggleKitchen ? "d-none" : "";
  const handlekitchenClick = () => {
    setToggleKitchen(true);
  };

  return (
    <div id="cart_icon">
      <ul className="cart_icon d-flex">
        <Link to="/Cart" className={cart_toggle} onClick={handleCartClick}>
          <div className="position-relative d-flex justify-content-center align-items-center mx-3  cart_img">
            <img className="w-50 pt-2 " src={cart_img} alt="" />
            <span className="position-absolute top-0 start-0  rounded-circle d-flex justify-content-center align-items-center numbericon">
              {cart.length}
            </span>
          </div>
        </Link>
        <Link to="/kitchen" className={kitchen_toggle} onClick={handlekitchenClick}>
          <div className="position-relative d-flex justify-content-center align-items-center mx-3 cart_img">
            <img className="w-25 pt-1" src={kitchen_img} alt="" />
            <span className="position-absolute top-0 start-0  rounded-circle d-flex justify-content-center align-items-center numbericon">
              {kitchen.length}
            </span>
          </div>
        </Link>
      </ul>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar bg-light fixed">
      <div className="container">
        <Logo />
        <div className="d-flex">
          <Profile />
          <HelpSection />
        </div>
        <CartIcon />
      </div>
    </nav>
  );
}
