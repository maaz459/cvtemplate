
import "./ContactForm.css"
import React from "react";
import { Form, Input } from "antd";

const ContactForm = () => {
  const [form] = Form.useForm();

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "#fafbfc",
      }}
    >
      <h1 className="text-center pt-5">Contact Form</h1>
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        className="mt-5"
      >
        <Form.Item name="email">
          <Input placeholder="Email Address" size="large" className="px-5" />
        </Form.Item>
        <Form.Item name="name">
          <Input className="px-5" placeholder="Name" size="large" />
        </Form.Item>
      </Form>
      <Form form={form} className="mt-3">
        <Form.Item name="subject">
          <Input
            className="px-5"
            placeholder="Enter Subject Here"
            size="large"
          />
        </Form.Item>
        <Form.Item name="help">
          <Input
            className="px-5"
            placeholder="Let us know how we can help you!"
            size="large"
            style={{ height: "120px" }}
          />
        </Form.Item>
      </Form>
      <div className="text-center">
        <button
          type="button"
          style={{
            backgroundColor: "#0a2c66",
            color: "white",
            width: "170px",
            height: "35px",
            fontSize: "12px",
            borderRadius: "2px",
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
