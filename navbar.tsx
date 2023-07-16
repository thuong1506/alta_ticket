import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, FileTextOutlined, FileProtectOutlined, SettingOutlined, DownOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState('home'); // Trạng thái để theo dõi menu đã chọn

  const containerStyle = {
    backgroundColor: '#F9F6F4',
  };

  const menuItemStyle = {
    fontSize: '18px',
    color: 'black',
  };

  const menuItemIconStyle = {
    fontSize: '24px',
    color: 'black',
  };

  const selectedMenuItemStyle = {
    backgroundColor: '#FFB800',
    color: 'white',
  };

  const serviceMenu = (
    <Menu>
      <Menu.Item key="service-package">
        <Link to="/service" style={menuItemStyle}>
          <span>Gói dịch vụ</span>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const handleMenuClick = (e: any) => {
    setSelectedMenu(e.key); // Cập nhật menu đã chọn khi có sự nhấn vào menu
  };

  return (
    <div>
      <Menu mode="vertical" style={containerStyle} onClick={handleMenuClick}>
        <Menu.Item key="home" style={selectedMenu === 'home' ? selectedMenuItemStyle : {}}>
          <Link to="/" style={selectedMenu === 'home' ? {...menuItemStyle, ...selectedMenuItemStyle} : menuItemStyle}>
            <HomeOutlined style={selectedMenu === 'home' ? {...menuItemIconStyle, ...selectedMenuItemStyle} : menuItemIconStyle} />
            <span>Trang chủ</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="manage" style={selectedMenu === 'manage' ? selectedMenuItemStyle : {}}>
          <Link to="/manage" style={selectedMenu === 'manage' ? {...menuItemStyle, ...selectedMenuItemStyle} : menuItemStyle}>
            <FileTextOutlined style={selectedMenu === 'manage' ? {...menuItemIconStyle, ...selectedMenuItemStyle} : menuItemIconStyle} />
            <span>Quản lý vé</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="audit" style={selectedMenu === 'audit' ? selectedMenuItemStyle : {}}>
          <Link to="/audit" style={selectedMenu === 'audit' ? {...menuItemStyle, ...selectedMenuItemStyle} : menuItemStyle}>
            <FileProtectOutlined style={selectedMenu === 'audit' ? {...menuItemIconStyle, ...selectedMenuItemStyle} : menuItemIconStyle} />
            <span>Đối soát vé</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="settings" style={selectedMenu === 'settings' ? selectedMenuItemStyle : {}}>
          <Dropdown overlay={serviceMenu} trigger={['click']}>
            <span>
              <SettingOutlined style={selectedMenu === 'settings' ? {...menuItemIconStyle, ...selectedMenuItemStyle} : menuItemIconStyle} />
              <span style={{fontSize:18}}>Cài đặt</span>
              <DownOutlined  />
            </span>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
