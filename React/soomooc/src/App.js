import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
const { Footer } = Layout;

const App = () => (
  <div className="App">
    <Layout>
      <Header />
      <Home />
      <Footer style={{ textAlign: 'center' }}>SOOMOOC ©2021 Created by EthanLoo</Footer>
    </Layout>
  </div>
);

export default App;