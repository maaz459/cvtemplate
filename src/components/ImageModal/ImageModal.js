import React from "react";
import { Row, Col } from "antd";
import "./ImageModal.css";
import { data } from "./../../Assets/icons/Icons";
import hobbies from "./hobbies.json";
const {
  pets,
  art,
  baking,
  beauty,
  bloging,
  camping,
  cinema,
  driving,
  cooking,
  cycling,
  design,
  diy,
  drawing,
  eating,
  exploring,
  fashion,
  fishing,
  fitness,
  gaming,
  gardening,
  hiking,
  home,
  meditation,
  mesuem,
  chess,
  skating,
  music,
  jewelry,
  nature,
  shoping,
  singing,
  reading,
  sports,
  swimming,
  theater,
  travel,
  football,
  soccer,
  tennis,
  table,
} = data;
const ImageModal = (name) => {
  const selectHobby = () => {
    console.log(name);
  };
  return (
    <>
      {/* 1st row */}
      <Row justify="space-between">
        {hobbies.name.map((d) => {
          return (
            <Col
              key={d}
              onClick={() => selectHobby(d)}
              className="imageColumn text-center"
              xs={4}
            >
              <img src={data[d]} />
              <div className="name">{d}</div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ImageModal;
