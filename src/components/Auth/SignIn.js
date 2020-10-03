import { Col, Row } from "antd";
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

import "./auth.css";
import image from "../assets/circle1.png";

function SignIn() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row className="container contain">
        <Col span={12}>
          <div className="signin_text">
            <h1>
              Welcome back, <br></br>Heroes
            </h1>
            <h4>We are glad to have you back :)</h4>
          </div>
        </Col>
        <Col span={12} className="form_sign">
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <label for="#user">Email id</label>

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

            <label for="#pass">Password</label>
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
              <a className="login-form-forgot forgot_pass" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
              <div className="register_now">
                Don’t have an account? Sign up <a href="/">here</a>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <img src={image} className="image_signin"></img>
    </div>
  );
}

export default SignIn;
