import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Modal, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { onSignIn, onSignOut } from "../redux/actions";
import "../assets/style.css";

const SignIn = () => {
  const [visiblee, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn, statusCode } = useSelector((state) => state.user);
  const onFinish = (values) => {
    let payload = values;
    if (values.rememberMe === undefined)
      payload = { ...values, rememberMe: false };
    dispatch(onSignIn(payload));
    setVisible(false);
    if (statusCode !== "200") {
      message.error("Error occured while login");
      return;
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onLogout = () => {
    dispatch(onSignOut());
  };
  return (
    <>
      {isLoggedIn ? (
        <Button onClick={onLogout}>Sign-Out</Button>
      ) : (
        <Button onClick={() => setVisible(true)} type="primary" size="middle">
          Sign-In
        </Button>
      )}
      <div className="sign-in">
        <Modal
          visible={visiblee}
          title="SIGN - IN"
          onCancel={() => setVisible(false)}
          footer={null}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="rememberMe"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default SignIn;
