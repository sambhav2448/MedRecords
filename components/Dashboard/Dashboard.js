import React from "react";
import { Form, Input } from "antd";

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <Form layout="horizontal">
          <div className="col-lg-4 bg-success">
            <div className="row">
              <div className="col-lg-4">Patient's Name</div>
              <div className="col-lg-8">
                <Form.Item>
                  <Input
                    style={{ width: "100%" }}
                    placeholder="Enter the patient's name"
                  />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="col-lg-4 bg-danger">b</div>
          <div className="col-lg-4 bg-warning">c</div>
        </Form>
      </div>
    </div>
  );
}

export default Dashboard;
