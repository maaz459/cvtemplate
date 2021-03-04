import React from "react";
import { Row, Col, Divider } from "antd";
import lockIcon from "../../../../Assets/icons/Icon ionic-md-lock.png";
import PlanDetailPackageCard from "../PlanDetailPacakgeCard/PlanDetailPackageCard";

const PlanDetailCard = () => {
  return (
    <div>
      <Row justify="center">
        <Col sm={22} lg={15}>
          <PlanDetailPackageCard
            title={
              <>
                <h6>
                  <strong>Your Plan Detail</strong>
                </h6>
                <Divider style={{ border: "1px solid grey" }} />
                <p>
                  Professional - Access All Visualcv Pro Features &nbsp;
                  <span> &nbsp; 3x &nbsp;</span>
                  <span style={{ float: "right" }}>
                    {" "}
                    &nbsp;<strong>$12/Month</strong>
                  </span>
                </p>
                <Divider style={{ border: "1px solid grey" }} />
                <p>
                  Resume Formating Services{" "}
                  <span style={{ paddingLeft: "32%" }}>1x</span>
                  <span style={{ float: "right" }}>
                    <strong>$0</strong>
                  </span>
                </p>
                <Divider style={{ border: "1px solid grey" }} />
                <p>
                  <strong>Today's Charge</strong>
                  <span style={{ float: "right" }}>
                    <strong>$36.00</strong>
                  </span>
                </p>
              </>
            }
          />
          <Row>
            <img className="mx-3 mt-3" src={lockIcon} />
            <span className="pt-3">This is A Secure and Encrypted Payment</span>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PlanDetailCard;
