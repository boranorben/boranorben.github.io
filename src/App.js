import React from 'react'
import './App.css'
import 'antd/dist/antd.css';
import { Layout } from 'antd'

import SiderProfile from './components/SiderProfile'
const { Header, Footer, Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout> 
        <SiderProfile />
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App