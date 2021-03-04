import React, { useState } from "react";
import { Modal, Button, Row, Col } from "antd";

import pets from "../../Assets/icons/Group 17195.png";
import art from "../../Assets/icons/Icon map-art-gallery.png";
import baking from "../../Assets/icons/Icon map-bakery.png";
import beauty from "../../Assets/icons/Icon map-beauty-salon.png";
import bloging from "../../Assets/icons/Icon awesome-blog.png";

import camping from "../../Assets/icons/Icon awesome-campground.png";
import cinema from "../../Assets/icons/Icon metro-video-camera.png";
import driving from "../../Assets/icons/Icon awesome-car.png";
import cooking from "../../Assets/icons/23.png";
import cycling from "../../Assets/icons/Icon metro-bicycle.png";

import design from "../../Assets/icons/Icon simple-materialdesign.png";
import diy from "../../Assets/icons/Group 17196.png";
import drawing from "../../Assets/icons/22.png";
import eating from "../../Assets/icons/Icon map-food.png";
import exploring from "../../Assets/icons/Icon material-explore.png";

import fashion from "../../Assets/icons/Icon map-clothing-store.png";
import fishing from "../../Assets/icons/Icon map-fishing-pier.png";
import fitness from "../../Assets/icons/Icon material-fitness-center.png";
import gaming from "../../Assets/icons/Icon metro-gamepad.png";
import gardening from "../../Assets/icons/Icon material-local-florist.png";

import hiking from "../../Assets/icons/Icon awesome-hiking.png";
import home from "../../Assets/icons/Icon awesome-home.png";
import meditation from "../../Assets/icons/16.png";
import mesuem from "../../Assets/icons/Icon map-museum.png";
import chess from "../../Assets/icons/Icon awesome-chess.png";

import skating from "../../Assets/icons/Icon map-ice-skating.png";
import music from "../../Assets/icons/Group 17197.png";
import jewelry from "../../Assets/icons/Icon map-jewelry-store.png";
import nature from "../../Assets/icons/Icon awesome-tree.png";
import shoping from "../../Assets/icons/Icon awesome-shopping-cart.png";

import singing from "../../Assets/icons/5.png";
import reading from "../../Assets/icons/Icon awesome-book-reader.png";
import sports from "../../Assets/icons/12.png";
import swimming from "../../Assets/icons/Icon awesome-swimmer.png";
import theater from "../../Assets/icons/Icon awesome-theater-masks.png";

import travel from "../../Assets/icons/Icon awesome-plane-departure.png";
import football from "../../Assets/icons/Icon ionic-ios-football.png";
import soccer from "../../Assets/icons/Icon awesome-football-ball.png";
import tennis from "../../Assets/icons/Icon map-tennis.png";
import table from "../../Assets/icons/Icon awesome-table-tennis.png";

import img from "../../Assets/icons/Icon map-art-gallery.png";
import "./ImageModal.css";

const ImageModal = () => {

  return (

    <>
      {/* 1st row */}
      <Row justify="space-between">
        <Col className="text-center" sm={4}>
          <img src={pets} />
          <div id="name">pets</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={art} />
          <div id="name">art</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={baking} />
          <div id="name">baking</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={beauty} />
          <div id="name">beauty</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={bloging} />
          <div id="name">bloging</div>
        </Col>
      </Row>
      {/* 2nd row */}
      <Row justify="space-between" className="mt-3">
        <Col className="text-center" sm={4}>
          <img src={camping} />
          <div id="name">camping</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={cinema} />
          <div id="name">cinema</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={driving} />
          <div id="name">driving</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={cooking} />
          <div id="name">cooking</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={cycling} />
          <div id="name">cycling</div>
        </Col>
      </Row>
      {/* 3rd row */}
      <Row justify="space-between" className="mt-3">
        <Col className="text-center" sm={4}>
          <img src={design} />
          <div id="name">design</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={diy} />
          <div id="name">DIY</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={drawing} />
          <div id="name">drawing</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={eating} />
          <div id="name">eating </div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={exploring} />
          <div id="name">exploring</div>
        </Col>
      </Row>
      {/* 4th row */}
      <Row justify="space-between" className="mt-3">
        <Col className="text-center" sm={4}>
          <img src={fashion} />
          <div id="name">fashion</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={fishing} />
          <div id="name">fishing</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={fitness} />
          <div id="name">fitness</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={gaming} />
          <div id="name">gaming</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={gardening} />
          <div id="name">gardening</div>
        </Col>
      </Row>
      {/* 5th row */}
      <Row justify="space-between" className="mt-3">
        <Col className="text-center" sm={4}>
          <img src={hiking} />
          <div id="name">hiking</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={home} />
          <div id="name">home decor</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={meditation} />
          <div id="name">meditation</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={mesuem} />
          <div id="name">museum</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={chess} />
          <div id="name">chess</div>
        </Col>
      </Row>
      {/* 6th row */}
      <Row justify="space-between" className="mt-3">
        <Col className="text-center" sm={4}>
          <img src={skating} />
          <div id="name">ice skating</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={music} />
          <div id="name">music</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={jewelry} />
          <div id="name">jewelry design</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={nature} />
          <div id="name">nature</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={shoping} />
          <div id="name">shoping</div>
        </Col>
      </Row>
      {/* 7th row */}
      <Row justify="space-between" className="mt-3">
        <Col className="text-center" sm={4}>
          <img src={singing} />
          <div id="name">singing</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={reading} />
          <div id="name">reading</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={sports} />
          <div id="name">sports</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={swimming} />
          <div id="name">swimming</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={theater} />
          <div id="name">theater</div>
        </Col>
      </Row>
      {/* 8th row */}
      <Row justify="space-between" className="mt-3">
        <Col className="text-center" sm={4}>
          <img src={travel} />
          <div id="name">travel</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={football} />
          <div id="name">football</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={soccer} />
          <div id="name">soccer</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={tennis} />
          <div id="name">tennis</div>
        </Col>
        <Col className="text-center" sm={4}>
          <img src={table} />
          <div id="name">table tennis</div>
        </Col>
      </Row>
    </>

  );
};

export default ImageModal;
