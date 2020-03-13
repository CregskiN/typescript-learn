import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, message } from "antd";
import "./index.css";
import axios from "axios";

import Board from "./components/Board";

// const Home: () => JSX.Element = () => {}
const Home: React.FC = (() => {
    const [isLogin, setIsLogin] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get("/api/isLogin")
            .then(res => {
                console.log('HomePage登陆状态检测', res);
                const data: responseResult.isLogin = res.data?.data;
                if (!data) {
                    message.error('请先登陆！');
                    setIsLogin(data);
                }
            }).catch(err => {
                console.log(err);
            });
    }, [isLogin]);

    const handleLogout = (e: React.MouseEvent) => {
        axios.get('/api/logout')
            .then(res => {
                const data: responseResult.logout = res.data?.data;
                if (!data) {
                    setIsLogin(data);
                }
            })
    }

    const handleCrollow = (e: React.MouseEvent) => {
        axios.get('/api/getData')
            .then(res => {
                const data: responseResult.getData = res.data?.data;
                if (data) {
                    message.success('爬取成功！');
                } else {
                    message.error('爬取失败')
                }
            }).catch(err => {
                message.error(err);
            })
    }

    const handleShow = (e: React.MouseEvent) => {
        axios.get('/api/showData')
            .then(res => {
                const data: responseResult.showData = res.data?.data;
                if (data) {
                    setData(data);
                }
            }).catch(err => {
                message.error('展示')
            })
    }


    if (!isLogin) {
        return <Redirect to='/login' />
    }

    return (
        <div className="home-page">
            <div className='home-btns'>
                <Button type="primary" onClick={handleCrollow}>爬取</Button>
                <Button type="primary" onClick={handleShow}>展示</Button>
                <Button type="primary" onClick={handleLogout}>退出</Button>
            </div>

            <Board data={data} />
        </div>
    )

});

export default Home;
