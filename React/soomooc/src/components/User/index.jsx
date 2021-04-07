import React, { Component } from 'react'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default class User extends Component {
    render() {
        return (
            <Avatar size={64} icon={<UserOutlined />} />
        )
    }
}
