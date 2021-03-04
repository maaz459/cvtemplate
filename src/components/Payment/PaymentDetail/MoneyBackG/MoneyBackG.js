import React from "react";
import { Row, Col } from "antd";
import img from "../../../../Assets/images/Group 11058.png";

const MoneyBackG = () => {
  return (
    <>
      <Row justify="space-around" className="mt-3">
        <Col sm={24} lg={4}>
          <img src={img} style={{ height: "100px", marginTop: "15%" }} />
        </Col>

        <Col sm={18} lg={20}>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "3%",
            }}
          >
            Money Back Gurantee
          </p>
          <p style={{ fontSize: "12px", color: "grey" }}>
            If you're not satisfied with Career CV for any reason with in your
            30 days, simply email us and we will refund your money.
            <br />
            No strings attached.
          </p>
        </Col>
      </Row>
    </>
  );
};
export default MoneyBackG;
