import React, { Component } from 'react'
import { Layout, Carousel } from 'antd';
import './index.css'

const { Content } = Layout

export default class Home extends Component {
    render() {
        return (
            <Content className="site-layout home" style={{ padding: '0 50px', marginTop: 64 }}>
                <div style={{ padding: 24, minHeight: 1380 }}>
                    <div className="banners">
                        <Carousel autoplay>
                            <div>
                                <img src="https://blog.ethanloo.top/img/cover/j.png" alt="" />
                            </div>
                            <div>
                                <img src="https://blog.ethanloo.top/img/cover/k.png" alt="" />
                            </div>
                            <div>
                                <img src="https://blog.ethanloo.top/img/cover/l.png" alt="" />
                            </div>
                            <div>
                                <img src="https://blog.ethanloo.top/img/cover/m.png" alt="" />
                            </div>
                        </Carousel>
                    </div>

                </div>
            </Content>
        )
    }
}
