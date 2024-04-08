import React, { useContext, useEffect } from "react";
import { Row, Col } from "antd";
import CustomerEngagement from "../images/Customer Engagement.png";
import ActionableInsights from "../images/Actionable Insights.png";
import EmployeesProductivity from "../images/Employees Productivity.png";
import OperationsExcellence from "../images/Operations Excellence.png";
import diamond from "../images/diamond.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { MenuOutlined } from "@ant-design/icons";
import { Context } from "../Context/Context";
import Card from "./card";

const cardsInfo = [
  {
    id: `Customer`,
    price: 100,
    image: CustomerEngagement,
    title: "Customer Engagement",
    description: "Get your own mobile app for industry specific",
  },
  {
    price: 100,
    image: ActionableInsights,
    title: "Actionable Insights",
    description: "Create Dashboards ",
    id: `Actionable`,
  },
  {
    price: 50,
    image: EmployeesProductivity,
    title: "Employees Productivity",
    description: "KPI Builder , Work Conf,Create Oracle Requests",
    id: `Employees`,
  },
  {
    price: 100,
    image: OperationsExcellence,
    title: "Operations Excellence",
    description: "Tenant/lessee Managment",
    id: `Operations`,
  },
];

function SupportSection() {
  return (
    <div id="Support" className="w-100 d-flex  align-items-end">
      <div className="container w-100 d-flex justify-content-between ">
        <h3 className=" mb-4">
          Get Support <img src={diamond} alt="support_img" />
        </h3>
        <div
          className={`d-flex justify-content-center align-items-center Support`}
        >
          <MenuOutlined />
        </div>
      </div>
    </div>
  );
}

function RemainingDTSUs() {
  return (
    <div className="mt-2 d-flex flex-row-reverse">
      <div className="d-flex me-0">
        <span className="text-muted mx-2">
          <i className="fa-solid fa-rotate-90 fa-gears text-success fa5"></i>{" "}
          Remaining DTSUs: 200
        </span>
        <span className="text-muted mx-2">
          <i className="fa-solid fa-rotate-90 fa-gears text-danger fa5 "></i>{" "}
          Remaining DTSUs: 350
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const {
    cart,
    setCart,
    setToggleCart,
    setToggleKitchen,
    kitchen,
    setKitchen,
  } = useContext(Context);

  useEffect(() => {
    setToggleCart(false);
    setToggleKitchen(false);
  }, []);

  const handleAddToCart = (card) => {
    const index = cart.findIndex((item) => item.product === card.title);
    if (index >= 0) {
      cart[index].quantity += 1;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          product: card.title,
          quantity: 1,
          key: cart.length,
          price: card.price,
        },
      ]);
    }
  };

  const handleAddToKitchen = (card) => {
    const index = kitchen.findIndex((item) => item.product === card.title);
    if (index >= 0) {
      kitchen[index].quantity += 1;
      setKitchen([...kitchen]);
    } else {
      setKitchen([
        ...kitchen,
        {
          product: card.title,
          quantity: 1,
          key: kitchen.length,
          price: card.price,
        },
      ]);
    }
  };

  return (
    <>
      <Navbar />
      <section className="container_home ">
        <div className="position-relative vh-100 ">
          <div className="backgroundBlue"></div>
          <SupportSection />
          <div id="card">
            <div className="container w-100 mt-3">
              <Row gutter={[30, 20]}>
                {cardsInfo.map((card, index) => (
                  <Col
                    key={index}
                    xs={{ span: 24 }}
                    md={{ span: 6 }}
                    style={{ width: "100%" }}
                  >
                    <Card
                      id={card.id}
                      img={card.image}
                      title={card.title}
                      body={card.description}
                      price={card.price}
                      AddToCart={() => {
                        handleAddToCart(card);
                      }}
                      AddToKitchen={() => {
                        handleAddToKitchen(card);
                      }}
                    />
                  </Col>
                ))}
              </Row>
              <RemainingDTSUs />
            </div>
          </div>
        </div>
      </section>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
