import React from 'react';
import { Col, Row, Space, Table, Tag, Pagination, Button } from 'antd';
import { FilterOutlined, CalendarOutlined, ClockCircleOutlined, DownOutlined } from '@ant-design/icons';
import Search from "antd/es/transfer/search";
import Logo from "../component/logo";
import Navbar from "../component/navbar";
import Account from "../component/account";
import CustomButton from '../component/button';
import type { ColumnsType } from 'antd/es/table';
import RadioButton from '../component/radio';
import Date from '../component/fill';


const Home: React.FC = () => {
  const containerStyle = {
    backgroundColor: '#F9F6F4',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const ticketListContainerStyle = {
    borderRadius: '10px',
    backgroundColor: 'white',
    padding: '20px',
    margin: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <Row>
        <Col span={6} style={{ paddingTop: '20px', paddingLeft: '50px' }}>
          <div style={{ paddingBottom: '50px' }}><Logo /></div>
          <Navbar />
          <p style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: '10px',
          }}>Copyright © 2020 Alta Sofware </p>
        </Col>
        <Col span={18}>
          <Row>
            <Col span={8} style={{ padding: '20px 0px 50px 0px' }}>
              <Search />
            </Col>
            <Col span={12}></Col>
            <Col span={4}><Account /></Col>
          </Row>
          <div style={ticketListContainerStyle}>
            <Row>
              <h1>Thống kê</h1>
            </Row>
            <Row>
              <Col span={24}>
                
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
