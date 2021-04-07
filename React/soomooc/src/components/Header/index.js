import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import User from "../User";
import './index.css'

const { Header } = Layout;

export default class index extends Component {
    render() {
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo">
                    <h1>SOOMOOC</h1>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">课程列表</Menu.Item>
                    <Menu.Item key="3">直播列表</Menu.Item>
                </Menu>
                <div className="user">
                    <User>
                    </User>
                </div>
            </Header>
        )
    }
}
