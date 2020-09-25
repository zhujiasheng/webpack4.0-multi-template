import React from "react";
import { Form, Input, Button, Message } from "antd";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const submitLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value) => {
    Message.success("登录成功", 3).then((res) => {
      props.history.push("layout/cardList");
    });
    console.log(value);
  };

  const onFinishFailed = (errorInfo) => {
    // Message.error("不能为空", 3);
    console.log(errorInfo);
  };

  return (
    <div style={{ width: 600, margin: "200px auto" }}>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          label="用户名"
          rules={[{ required: true, message: "不能为空" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="pass"
          label="密码"
          rules={[{ required: true, message: "不能为空" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...submitLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default withRouter(Login);
