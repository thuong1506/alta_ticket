import React from 'react';
import { Col, Row, Space, Table, Tag, Pagination, Button } from 'antd';
import { FilterOutlined, CopyrightOutlined } from '@ant-design/icons';
import Search from "antd/es/transfer/search";
import Logo from "../component/logo";
import Navbar from "../component/navbar";
import Account from "../component/account";
import CustomButton from '../component/button';
import type { ColumnsType } from 'antd/es/table';
import RadioButton from '../component/radio';
import Date from '../component/fill';

const TicketManagement: React.FC = () => {
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

  const columns: ColumnsType<any> = [
    {
      title: 'STT',
      dataIndex: 'ticketCode',
      key: 'ticketCode',
    },
    {
      title: 'Số vé',
      dataIndex: 'numberTicket',
      key: 'numberTicket',
    },


    {
      title: 'Ngày sử dụng',
      dataIndex: 'dateUse',
      key: 'dateUse',
    },
    {
      title: 'Tên loại vé',
      dataIndex: 'passengerName',
      key: 'passengerName',
    },
    {
      title: 'Cổng check-in',
      dataIndex: 'checkin',
      key: 'checkin',
    },
    {
      title: '',
      dataIndex: 'check',
      key: 'check',
    },

  ];

  const data = [
    {
      key: '1',
      ticketCode: '1',

      numberTicket: '135267489264',
      passengerName: 'Vé cổng',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: ' Hết hạn',
    },
    {
      key: '2',
      ticketCode: '2',

      numberTicket: '135267489264',
      passengerName: 'Vé cổng',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: ' Hết hạn',
    },
    {
      key: '3',
      ticketCode: '3',

      numberTicket: '135267489264',
      passengerName: 'Vé cổng',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: ' Hết hạn',
    },
    {
      key: '4',
      ticketCode: '4',

      numberTicket: '135267489264',
      passengerName: 'Vé cổng',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: ' Hết hạn',
    },
    {
      key: '5',
      ticketCode: '5',

      numberTicket: '135267489264',
      passengerName: 'Vé cổng',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: ' Hết hạn',
    },
    {
      key: '6',
      ticketCode: '6',

      numberTicket: '135267489264',
      passengerName: 'Vé cổng',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: ' Hết hạn',
    },
  ];



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
          {/* noi dung chinh */}
          <Row>
            {/* doi soat ve */}
            <Col span={17}>
              <div style={ticketListContainerStyle}>
                <Row>
                  <h1>Đối soát vé</h1>
                </Row>
                <Row>
                  <Col span={8}>
                    <Search />
                  </Col>
                  <Col span={10}></Col>
                  <Col span={4}>
                    <Button style={{ background: '#FF993C', color: 'white', width: '120px' }}><b>Chốt đối soát</b></Button>
                  </Col>
                </Row>
                <Row style={{ paddingTop: '20px' }}>
                  <Col span={24}>
                    <Table columns={columns} dataSource={data} pagination={false} />
                    <Row justify="center" style={{ marginTop: '20px' }}>
                      <Pagination current={1} total={50} pageSize={1} hideOnSinglePage showSizeChanger={false} />
                    </Row>
                  </Col>
                </Row>


              </div>
            </Col>
            {/* loc ve */}
            <Col span={7}>
              <div style={ticketListContainerStyle}>
                <Row>
                  <h3>Lọc vé</h3>
                </Row>
                <Row>
                  <Col span={12}>
                    <b>Tình trạng đối soát</b>
                  </Col>
                  <Col span={12} >
                    <Row>
                      <RadioButton name='Tất cả' />
                    </Row>
                    <Row>
                      <RadioButton name='Đã đối soát' />
                    </Row>
                    <Row>
                      <RadioButton name='Chưa đối soát' />
                    </Row>
                  </Col>
                </Row>
                <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <Col span={12}><b>Loại vé</b></Col>
                  <Col span={12} style={{ marginTop: '-12px' }}><p>Vé cổng</p></Col>
                </Row>
                <Row style={{ marginBottom: '20px' }}>
                  <Col span={12}><b>Từ ngày</b></Col>
                  <Col span={12} style={{ marginTop: '6px' }}>
                    <Date />
                  </Col>
                </Row>
                <Row style={{ marginBottom: '20px' }}>
                  <Col span={12}><b>Đến ngày</b></Col>
                  <Col span={12} style={{ marginTop: '6px' }}>
                    <Date />
                  </Col>
                </Row>
                <Row style={{ marginLeft: '80px', paddingBottom: '220px' }}>
                  <CustomButton name="Lọc" />
                </Row>
              </div>
            </Col>
          </Row>



        </Col>
      </Row>
    </div>
  );
};

export default TicketManagement;
