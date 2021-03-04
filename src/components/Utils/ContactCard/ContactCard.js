import React from "react";
import { Card, Divider } from "antd";
import "antd/dist/antd.css";
import "./ContactCard.css";

const ContactCard = ({
  title,
  extra,
  uppertext,
  country,
  number,
  waitingTime,
  opening,
  time,
}) => {
  return (
    <div className="site-card-wrapper ">
      <Card
        hoverable
        title={title}
        extra={extra}
        bordered={true}
        style={{
          borderRadius: "20px",
          width: "350px",
          height: "300px",
          margin: "20px",
        }}
      >
        <p className="text-center">{uppertext}</p>
        <p>
          <span
            style={{
              float: "left",
              marginLeft: "20px",
              fontWeight: "bold",
            }}
          >
            {country}
          </span>
          <span
            style={{
              float: "right",
              marginRight: "20px",
              fontWeight: "bold",
            }}
          >
            {number}
          </span>
        </p>
        <br />
        <Divider style={{ border: "1px solid grey" }} />
        <p className="text-center">{waitingTime}</p>
        <p>
          <span
            style={{
              float: "left",
              marginLeft: "20px",
              fontWeight: "bold",
            }}
          >
            {opening}
          </span>
          <span
            style={{
              float: "right",
              marginRight: "20px",
              fontWeight: "bold",
            }}
          >
            {time}
          </span>
        </p>
      </Card>
    </div>
  );
};
export default ContactCard;
