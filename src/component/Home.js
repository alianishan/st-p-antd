import React, { useState } from "react";
import { Form, Input, Typography, Button, Table, Modal } from "antd";
import "./Login.css";
import {
  MailOutlined,
  UserOutlined,
  HomeFilled,
  PhoneOutlined,
  DeleteFilled,
  EditFilled,
  KeyOutlined,
  SaveFilled,
} from "@ant-design/icons";

function Home() {
  
  const [form] = Form.useForm();
  const [editingRow, setEditingRow] = useState(null);

  const Delete = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this",
      onOk: () => {
        setData((pre) => {
          return pre.filter((Student) => Student.id !== record.id);
        });
      },
    });
  };

  const dataSource = [
    {
      id: "1",
      name: "Mike",
      email: "alianishanscs@outlook.com",
      address: "10 Downing Street",
      number: "3245454",
    },
    {
      id: "2",
      name: "Maria",
      email: "alianishanscs@outlook.com",
      address: "10 Downing Street",
      number: "3245454",
    },

    {
      id: "3",
      name: "Saba",
      email: "alianishanscs@outlook.com",
      number: "4245435454",
      address: "10 Downing Street",
    },
    {
      id: "4",
      name: "Saba",
      email: "alianishanscs@outlook.com",
      number: "4245435454",
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "1",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "2",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "3",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "4",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },

    {
      key: "5",
      title: "Delete",
      render: (record) => {
        return (
          <>
            <DeleteFilled
              style={{ color: "red", fontSize: "20px" }}
              onClick={() => Delete(record)}
            />
          </>
        );
      },
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditFilled
              type="link"
              onClick={() => {
                setEditingRow(record.id);
                form.setFieldsValue({});
              }}
              style={{ fontSize: "16px", color: "#08c" }}
            />

            <SaveFilled 
              type="link"
              htmlType="submit"
              style={{ fontSize: "16px", color: "green" }}
            />
          </>
        );
      },
    },
    
  ];




  const [data, setData] = useState(dataSource);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = {
      id,
      name,
      address,
      email,
      number,
    };
    add(value);

    setName("");
    setId("");
    setEmail("");
    setNumber("");
    setAddress("");
  };

  const add = (value) => {
    setData([...dataSource, value]);
  };

  return (
    <div className="Home">
      <div className="d">
        <Form form={form} className="form1">
          <Typography.Title className="title">
            Registeration Form
          </Typography.Title>
          <Form.Item
            label="Name"
            className="lable"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          ></Form.Item>
          <Input
            type="text"
            placeholder="Enter Your Name"
            prefix={
              <UserOutlined style={{ fontSize: "16px", color: "#08c" }} />
            }
            className="input"
            allowClear
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Item
            label="Id"
            className="lable"
            rules={[{ required: true, message: "Please input your full Id!" }]}
          ></Form.Item>
          <Input
            type="text"
            placeholder="Enter Your Id"
            prefix={<KeyOutlined style={{ fontSize: "16px", color: "#08c" }} />}
            className="input"
            allowClear
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Form.Item
            label="Address"
            className="lable"
            rules={[{ required: true, message: "Please input your Address!" }]}
          ></Form.Item>
          <Input
            type="text"
            placeholder="Enter Your Address"
            prefix={<HomeFilled style={{ fontSize: "16px", color: "#08c" }} />}
            className="input"
            allowClear
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Form.Item
            label="Email"
            className="lable"
            rules={[{ required: true, message: "Please input your Email!" }]}
          ></Form.Item>
          <Input
            type="Email"
            placeholder="Enter Your Email"
            prefix={
              <MailOutlined style={{ fontSize: "16px", color: "#08c" }} />
            }
            className="input"
            allowClear
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Item
            label="Phone Number"
            className="lable"
            rules={[
              { required: true, message: "Please input your phone Number!" },
            ]}
          ></Form.Item>
          <Input
            type="Number"
            placeholder="Enter Your Number"
            prefix={
              <PhoneOutlined style={{ fontSize: "16px", color: "#08c" }} />
            }
            className="input"
            allowClear
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <Button
            type="primary"
            className="btn"
            htmlType="submit"
            block
            onClick={handleSubmit}
          >
            Submit{" "}
          </Button>
        </Form>
        <Table className="table" dataSource={data} columns={columns} />;
      </div>
    </div>
  );
}

export default Home;
