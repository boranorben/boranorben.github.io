import React, { Component } from 'react'
import { Layout, Image, Menu, List } from 'antd'
import avatar from '../media/avatar.png'
import '../css/SiderProfile.css'
const { Sider } = Layout;

class SiderProfile extends Component {
  state = {
    collapsed: false,
  }
  
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const { collapsed } = this.state
    const data = [
      {
        title: 'Issaree Srisomboon',
        description: '@boranorben'
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ];
    return (
      <Sider
        className='sider'
        collapsible collapsed={collapsed}
        onCollapse={this.onCollapse}
        theme='light'
      >
        <div className='avatar-image'>
            <Image src={avatar} />
        </div>
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={item => (
            <List.Item>
              { this.state.collapsed ? (
                <List.Item.Meta
                  title={item.title.substr(0, 1)}
                  description={null}
                />
              ) : (
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              )}
              
            </List.Item>
          )}
        />
        {/* <Menu>
          <Menu.Item>
            Issaree_Srisomboon
          </Menu.Item>
        </Menu> */}
      </Sider>
    )
  }
}

export default SiderProfile