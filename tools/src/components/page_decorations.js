import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

export class MenuComponent extends React.Component {
  render() {
    return (
      <Menu mode='horizontal'>
        <Menu.Item key="main">
          <Link to="/">工具主页</Link>
        </Menu.Item>
        <Menu.Item key="grouper">
          <Link to="/grouper">分组工具</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

