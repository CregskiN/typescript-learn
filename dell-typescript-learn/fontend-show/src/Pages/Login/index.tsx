import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Callbacks } from "../../../node_modules/rc-field-form/lib/interface";
import "./index.css";
import axios from "axios";
import qs from "qs";
import { Redirect } from 'react-router-dom';

const Login: React.FC = (() => {
    const [islogin, setIslogin] = useState(false);

    useEffect(() => {
        axios.get("/api/isLogin")
            .then(res => {
                console.log('LoginPage检测登陆状态', res);
                if (res.data?.data) {
                    const loginState: responseResult.isLogin = res.data.data;
                    if (loginState) {
                        setIslogin(loginState);
                    }
                }
            }).catch(err => {
                console.log(err);
            });
    }, [islogin]);

    const onFinish: Callbacks["onFinish"] = values => {
        const { password } = values;
        axios.post("/api/login", qs.stringify({
            password,
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }).then(res => {
            console.log('提交', res);
            if (res.data?.data) {
                const loginState = res.data.data;
                if (loginState) {
                    setIslogin(loginState);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    };

    if (islogin) {
        return <Redirect to='/' />
    }
    
    return (
        <div className="login-page">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "请输入密码",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        登陆
                        </Button>
                </Form.Item>
            </Form >
        </div >
    )



});
export default Login;
