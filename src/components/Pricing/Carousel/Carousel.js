import React from "react";
import "./Carousel.css";
import img0 from "./../../../Assets/images/Group 17194.png";
import img1 from "./../../../Assets/images/Group 17193.png";
import img2 from "./../../../Assets/images/Group 17246.png";
import img3 from "./../../../Assets/images/Group 11091.png";

const Carousel = () => {
  return (
    <div className="container">
      <div id="slider" className="carousel slide" data-ride="carousel">
        <h1 id="heading">What Members Love About Career CV Pro</h1>

        {/* indicator */}
        <div id="indicator">
          <ol class="carousel-indicators">
            <li data-target="#slider" data-slide-to="0" className="active"></li>
            <li data-target="#slider" data-slide-to="1"></li>
            <li data-target="#slider" data-slide-to="2"></li>
            <li data-target="#slider" data-slide-to="3"></li>
          </ol>
        </div>
        <div className="carousel-inner">
          <div className="item active">
            <div className="row">
              <div className="col-sm-6">
                <div>
                  <p>
                    "there is a dummy text here. because i ask my partner to add
                    here dummy images with a mixture of text and img. But he
                    said to me that here come reviews from backend so we need to
                    make custom css slider with text and image."
                  </p>
                  <p style={{ color: "#0a2c66", fontSize: "15px" }}>name</p>
                </div>
              </div>
              <div className="col-sm-6">
                <img src={img0} />
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="item">
            <div className="row">
              <div className="col-sm-6">
                <div>
                  <p>
                    "there is a dummy text here. because i ask my partner to add
                    here dummy images with a mixture of text and img. But he
                    said to me that here come reviews from backend so we need to
                    make custom css slider with text and image."
                  </p>
                  <p style={{ color: "#0a2c66", fontSize: "15px" }}>name</p>
                </div>
              </div>
              <div className="col-sm-6">
                <img src={img1} />
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="item ">
            <div className="row">
              <div className="col-sm-6">
                <div>
                  <p>
                    "there is a dummy text here. because i ask my partner to add
                    here dummy images with a mixture of text and img. But he
                    said to me that here come reviews from backend so we need to
                    make custom css slider with text and image."
                  </p>
                  <p style={{ color: "#0a2c66", fontSize: "15px" }}>name</p>
                </div>
              </div>
              <div className="col-sm-6">
                <img src={img2} />
              </div>
            </div>
          </div>
          {/* 4th */}
          <div className="item">
            <div className="row">
              <div className="col-sm-6">
                <div>
                  <p>
                    "there is a dummy text here. because i ask my partner to add
                    here dummy images with a mixture of text and img. But he
                    said to me that here come reviews from backend so we need to
                    make custom css slider with text and image."
                  </p>
                  <p style={{ color: "#0a2c66", fontSize: "15px" }}>name</p>
                </div>
              </div>
              <div className="col-sm-6">
                <img src={img3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
