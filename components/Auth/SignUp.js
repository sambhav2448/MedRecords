import { Col, Row } from "antd";
import React from "react";
import { Form, Input, Button } from "antd";

import "./auth.css";
import image from "../assets/circle2.png";

function SignIn() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row className="container containSignup">
        <Col span={12}>
          <div className="signin_text signup_text">
            <h1>
              Hello! <br></br>Heroes
            </h1>
            <h4>Sign up to get started :)</h4>
          </div>
        </Col>
        <Col span={12} className="form_signup">
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <label htmlFor="#name">Full Name</label>

            <Form.Item
              id="name"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please provide the name",
                },
              ]}
            >
              <Input placeholder="Please provide your name" />
            </Form.Item>

            <label htmlFor="#field">You’re a specialist of</label>

            <Form.Item
              id="field"
              name="field"
              rules={[
                {
                  required: true,
                  message: "Please provide your speciality",
                },
              ]}
            >
              <Input placeholder="Please provide your hospital issued email" />
            </Form.Item>
            <label htmlFor="#reg">Registration id</label>

            <Form.Item
              id="reg"
              name="regid"
              rules={[
                {
                  required: true,
                  message: "Please provide the id",
                },
              ]}
            >
              <Input placeholder="Please provide your hospital issued email" />
            </Form.Item>
            <label htmlFor="#user">Email id</label>

            <Form.Item
              id="user"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please provide the email",
                },
              ]}
            >
              <Input placeholder="Please provide your hospital issued email" />
            </Form.Item>

            <label htmlFor="#pass">Password</label>
            <Form.Item
              className="password_signin"
              id="pass"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input type="password" placeholder="shhhh........" />
            </Form.Item>

            <Form.Item>
              <a className="login-form-forgot forgot_pass" href="/">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
              <div className="register_now">
                Already have an account? Login up <a href="/">here</a>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <img src={image} alt="circle2" className="image_signup"></img>
    </div>
  );
}

export default SignIn;
