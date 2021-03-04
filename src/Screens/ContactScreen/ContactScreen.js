import React from "react";
import img from "./../../Assets/images/Group 11091.png";
import ContactForm from "./../../components/Utils/ContactForm/ContactForm";
import Help from "./../../components/Utils/Help/Help";
import Questions from "./../../components/Questions/Questions";
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import { Row, Col } from 'antd'
const ContactScreen = () => {
  return (
    <>
      <Navbar></Navbar>
      <img src={img} alt="banner" style={{ width: "100%" }} />
      <div style={{ marginTop: "8%" }}>
        <Help />
      </div>
      <div style={{ marginTop: "5%" }}>
        <Questions />
      </div>
      <Row justify="center" style={{ backgroundColor: "#fafbfc" }}>
        <Col>
          <ContactForm />
        </Col>
      </Row>
      <Footer />
    </>
  );
};
export default ContactScreen;
