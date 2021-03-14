import React from "react";
import { Row, Col } from "antd";
import "./ImageModal.css";
import { data } from "./../../Assets/icons/Icons";
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
        <Col onClick={() => selectHobby(pets)} className="imageColumn text-center" xs={4}>
          <img src={pets} />
          <div className="name">pets</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={art} />
          <div className="name">art</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={baking} />
          <div className="name">baking</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={beauty} />
          <div className="name">beauty</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={bloging} />
          <div className="name">bloging</div>
        </Col>
      </Row>
      {/* 2nd row */}
      <Row justify="space-between" className="mt-3">
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={camping} />
          <div className="name">camping</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={cinema} />
          <div className="name">cinema</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={driving} />
          <div className="name">driving</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={cooking} />
          <div className="name">cooking</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={cycling} />
          <div className="name">cycling</div>
        </Col>
      </Row>
      {/* 3rd row */}
      <Row justify="space-between" className="mt-3">
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={design} />
          <div className="name">design</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={diy} />
          <div className="name">DIY</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={drawing} />
          <div className="name">drawing</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={eating} />
          <div className="name">eating </div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={exploring} />
          <div className="name">exploring</div>
        </Col>
      </Row>
      {/* 4th row */}
      <Row justify="space-between" className="mt-3">
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={fashion} />
          <div className="name">fashion</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={fishing} />
          <div className="name">fishing</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={fitness} />
          <div className="name">fitness</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={gaming} />
          <div className="name">gaming</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={gardening} />
          <div className="name">gardening</div>
        </Col>
      </Row>
      {/* 5th row */}
      <Row justify="space-between" className="mt-3">
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={hiking} />
          <div className="name">hiking</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={home} />
          <div className="name">home decor</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={meditation} />
          <div className="name">meditation</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={mesuem} />
          <div className="name">museum</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={chess} />
          <div className="name">chess</div>
        </Col>
      </Row>
      {/* 6th row */}
      <Row justify="space-between" className="mt-3">
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={skating} />
          <div className="name">ice skating</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={music} />
          <div className="name">music</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={jewelry} />
          <div className="name">jewelry design</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={nature} />
          <div className="name">nature</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={shoping} />
          <div className="name">shoping</div>
        </Col>
      </Row>
      {/* 7th row */}
      <Row justify="space-between" className="mt-3">
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={singing} />
          <div className="name">singing</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={reading} />
          <div className="name">reading</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={sports} />
          <div className="name">sports</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={swimming} />
          <div className="name">swimming</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={theater} />
          <div className="name">theater</div>
        </Col>
      </Row>
      {/* 8th row */}
      <Row justify="space-between" className="mt-3">
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={travel} />
          <div className="name">travel</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={football} />
          <div className="name">football</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={soccer} />
          <div className="name">soccer</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={tennis} />
          <div className="name">tennis</div>
        </Col>
        <Col onClick={selectHobby} className="imageColumn text-center" xs={4}>
          <img src={table} />
          <div className="name">table tennis</div>
        </Col>
      </Row>
    </>
  );
};

export default ImageModal;
