import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, FileTextOutlined, FileProtectOutlined, SettingOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => {
  const containerStyle = {
    backgroundColor: '#F9F6F4',
   
  };

  return (
    
    <Menu  mode="vertical" style={containerStyle}>
      <Menu.Item key="home" icon={<HomeOutlined style={{fontSize:'24px'}}/>}>
        <Link to="/" style={{fontSize:'18px'}}>Trang chủ</Link>
      </Menu.Item>
      <Menu.Item key="manage" icon={<FileTextOutlined style={{fontSize:'24px'}}/>}>
        <Link to="/manage" style={{fontSize:'18px'}}>Quản lý vé</Link>
      </Menu.Item>
      <Menu.Item key="audit" icon={<FileProtectOutlined style={{fontSize:'24px'}}/>}>
        <Link to="/audit" style={{fontSize:'18px'}}>Đối soát vé</Link>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined style={{fontSize:'24px'}}/>}>
        <Link to="/settings" style={{fontSize:'18px'}}>Cài đặt</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
