import React from "react";
import logo from '../../assets/logo.svg';
import styles from "./Header.module.css";
import { Layout, Typography, Input, Menu, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'

export const Header : React.FC = () => {

    return (
    <div className={styles['app-header']}>
      <div className={styles['top-header']}>
        <Typography.Text type='danger' strong={true}>INTERNAL USAGE ONLY</Typography.Text>
        <Button.Group className={styles['button-group']}>
          <Link to="/signin">
            <Button type="primary" icon={<UserOutlined />}>Login</Button>
          </Link>
          <Link to="/signout">
            <Button icon={<LogoutOutlined />}>Logout</Button>
          </Link>
        </Button.Group>

      </div>
      <Layout.Header className={styles['main-header']}>
        <img src={logo} alt="logo" className={styles['App-logo']}/>
        <Typography.Title level={3} className={styles.title}>Admin v3 @2024</Typography.Title>
        <Input.Search 
          className={styles['search-input']} 
          placeholder="books, authors, topics, comments or anything else ...">
        </Input.Search>
      </Layout.Header>
      <Menu mode={'horizontal'} className={styles['main-menu']} items={[
        { key: 1, label: (<a href="/">Home</a>)},
        { key: 2, label: (<a href="/users">Users</a>)},
        { key: 3, label: (<a href="/comments">Comments</a>)},
        { key: 4, label: (<a href="/books">Books</a>)},
        { key: 5, label: (<a href="/topics">Topics</a>)},
        { key: 6, label: (<a href="/ads">ADs Management</a>)},
      ]}>

      </Menu>
  </div>)
}
