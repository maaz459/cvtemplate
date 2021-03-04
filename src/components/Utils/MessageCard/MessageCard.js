import React from "react";
import { Card, Divider, Button } from "antd";
import "antd/dist/antd.css";
import "../ContactCard/ContactCard.css";

const MessageCard = ({ title, extra, uppertext, lowertext, btnText }) => {
  return (
    <div className="site-card-wrapper">
      <Card
        hoverable
        title={title}
        extra={extra}
        bordered={true}
        style={{
          borderRadius: "20px",
          width: "350px",
          height: "300px",
          backgroundColor: "#d9f4eb",
          margin: "20px",
        }}
      >
        <p className="text-center">{uppertext}</p>

        <Divider style={{ border: "1px solid grey" }} />
        <p className="text-center">{lowertext}</p>
        <Button
          style={{
            backgroundColor: "#6984ae",
            color: "white",
            width: "250px",
            marginLeft: "25px",
          }}
        >
          {btnText}
        </Button>
      </Card>
    </div>
  );
};
export default MessageCard;
