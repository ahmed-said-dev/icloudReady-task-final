import { Context } from "../Context/Context";
import React, { useContext, useEffect } from "react";
import Footer from "../Footer/Footer";
import rectangle from "../images/Rectangle 32.png";
import cart_img from "../images/cart@3x.png";
import "./SideNav.css";
import Navbar from "../Navbar/Navbar";
import cloud from "../images/cloud.png";
import { Row, Popconfirm, Divider, Col, Button, Alert } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Kitchen() {
  const navigate = useNavigate();
  const { setToggleCart, setToggleKitchen, kitchen, setKitchen } =
    useContext(Context);
  useEffect(() => {
    setToggleCart(false);
  }, []);
  const handleCloseBtn = () => {
    setToggleCart(false);
    setToggleKitchen(false);
    navigate("/");
  };

  const deleteProduct = (key) => {
    const newkitchen = kitchen.filter((product) => product.key !== key);
    setKitchen(newkitchen);
  };

  const empty_kitchen = (
    <div className="emptyCart text-center">
      <img className="w-100" src={cart_img} alt="empty-card" />
      <h6 className="mt-3">Your run Kitchen is empty!</h6>
      <span className="text-muted">start add your requests here</span>
    </div>
  );

  const product = (
    <div className="w-100">
      <Divider style={{ marginTop: "0", marginBottom: "15px" }} />
      <Row>
        <Col md={{ span: 14 }} style={{ marginLeft: "28px" }}>
          request
        </Col>
        <Col md={{ span: 4 }}>status</Col>
        <Col md={{ span: 4 }}>O/P Link</Col>
        <Divider style={{ marginTop: "15px" }} />
      </Row>

      {kitchen.map((product, index) => {
        return (
          <Row key={index}>
            <Col
              md={{ span: 15 }}
              style={{ marginLeft: "6px" }}
              className="d-flex"
            >
              <div className="img_product">
                <img
                  src={rectangle}
                  style={{ width: "17px", height: "17px" }}
                />
              </div>
              <div>
                <div>{product.product}</div>
                <div className="price">{`Private Training ,${product.price}DTSU`}</div>
              </div>
            </Col>
            <Col md={{ span: 4 }}>
              <Row className="status">
                <div className="status_container">
                  <div className="status_content"></div>
                </div>
              </Row>
            </Col>
            <Col md={{ span: 4 }}>
              <Popconfirm
                title="Sure to delete?"
                onClick={() => deleteProduct(product.key)}
              >
                <img
                  src={cloud}
                  alt="download"
                  style={{ marginLeft: "15px" }}
                />
              </Popconfirm>
            </Col>
            <Divider />
          </Row>
        );
      })}
      <Row>
        <Col md={{ span: 17 }} style={{ marginLeft: "16px" }}>
          Units Under Processing
        </Col>
        <Col md={{ span: 3 }} className="subTotal">
          12.00DTSUs
        </Col>
      </Row>
      <Row style={{ marginTop: "15px" }}>
        <Col md={{ span: 10 }} style={{ marginLeft: "16px" }}>
          Units Completed
        </Col>
        <Col md={{ span: 12 }} className="subTotal">
          12.00 DTSUs
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col md={{ span: 17 }} style={{ marginLeft: "16px" }}>
          Total Units Consumed
        </Col>
        <Col md={{ span: 3 }} className="subTotal">
          12.00DTSUs
        </Col>
      </Row>
      <Row>
        <div className="btn mt-2">
          <Button
            shape="round"
            size="large"
            style={{
              backgroundColor: "#0097C2",
              color: "#FFFFFF",
              width: "323px",
              height: "48px",
            }}
            onClick={() => {
              setKitchen([]);
            }}
          >
            Refresh Status
          </Button>
        </div>
      </Row>
      <Row>
        <div className="btn mt-2">
          <Button
            shape="round"
            size="large"
            style={{
              color: "#0097C2",
              width: "323px",
              height: "48px",
              border: "2px solid #0097C2",
            }}
            onClick={handleCloseBtn}
          >
            Back to Your Dashboard
          </Button>
        </div>
      </Row>

      <Row className="mt-2 justify-content-center">
        <Alert
          description="some requests can take a week or more to delivered"
          type="info"
          showIcon
          style={{ width: "323px" }}
        />
      </Row>
    </div>
  );
  return (
    <>
      <div className="cartContainer">
        <div className="navContainer">
          <Navbar />
        </div>
        <div className="  vh-100 ">
          <div id="Nav">
            <Row className="header_side_nav">
              <div className="d-flex align-items-center">
                <CloseCircleOutlined
                  className="closeBtn"
                  onClick={handleCloseBtn}
                />
                <h6 className="run_cart">Your Run kitchen</h6>
              </div>
              <div className="requestContainer">
                <h6 className="requestNum">request in your run</h6>
                <div className="d-flex justify-content-center  ">
                  <span
                    className={`rounded-circle d-flex justify-content-center align-items-center numbericon ml-1`}
                  >
                    {kitchen.length}
                  </span>
                </div>
              </div>
            </Row>
            <Row>{kitchen.length === 0 ? empty_kitchen : product}</Row>
          </div>
        </div>
        <div className="footerCart">
          <Footer />
        </div>
      </div>
    </>
  );
}
