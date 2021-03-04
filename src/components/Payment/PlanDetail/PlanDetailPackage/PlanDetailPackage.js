import React from "react";
import { Row, Col, Divider } from "antd";
import PlanDetailPackageCard from "../PlanDetailPacakgeCard/PlanDetailPackageCard";

const PlanDetailPackage = () => {
  return (
    <>
      <Row className="mt-3 mb-3" style={{ marginLeft: "19%" }}>
        <h5>
          <strong>Your Plan details</strong>
        </h5>
      </Row>
      <Row justify="center">
        <Col sm={24} lg={7}>
          <PlanDetailPackageCard
            name={
              <h6 className="text-center" style={{ margin: "0px", padding: "0px", fontSize: "13px" }}>
                <strong>Pro Quartely</strong>
              </h6>
            }
            price={
              <>
                <p
                  style={{
                    fontSize: "45px",
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: "0px", padding: "0px"
                  }}
                >
                  $12
                  <span style={{ color: "grey", fontSize: "10px" }}>
                    /monthly
                  </span>
                </p>
              </>
            }
            bill={
              <p
                style={{ color: "grey", fontSize: "12px", textAlign: "center", margin: "0px", padding: "0px" }}
              >
                <strong>Billed Quartely</strong>
              </p>
            }
          />
        </Col>
        <Divider
          type="vertical"
          style={{
            border: "1px solid #0a2c66",
            height: "100px",
            alignSelf: "center",
            marginLeft: "2%",
            marginRight: "2%",
          }}
        />
        <Col sm={24} lg={7}>
          <PlanDetailPackageCard
            name={
              <h6 className="text-center">
                <strong>Pro Monthly</strong>
              </h6>
            }
            price={
              <>
                <p
                  style={{
                    fontSize: "45px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  $18
                  <span style={{ color: "grey", fontSize: "10px" }}>
                    /monthly
                  </span>
                </p>
              </>
            }
            bill={
              <p
                style={{ color: "grey", fontSize: "12px", textAlign: "center" }}
              >
                <strong>Billed Monthly</strong>
              </p>
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default PlanDetailPackage;
