import React from 'react';
import { Col, Row, Space, Table, Tag, Pagination } from 'antd';
import { FilterOutlined, CopyrightOutlined } from '@ant-design/icons';
import Search from "antd/es/transfer/search";
import Logo from "../component/logo";
import Navbar from "../component/navbar";
import Account from "../component/account";
import CustomButton from '../component/button';
import type { ColumnsType } from 'antd/es/table';

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
      title: 'Booking code',
      dataIndex: 'bookingCode',
      key: 'bookingCode',
    },
    {
      title: 'Số vé',
      dataIndex: 'numberTicket',
      key: 'numberTicket',
    },
    {
      title: 'Tên sự kiện',
      dataIndex: 'passengerName',
      key: 'passengerName',
    },
    {
      title: 'Tình trạng sử dụng',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag icon={<svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
        <circle cx="4" cy="4.5" r="4" fill="#FD5959"/>
      </svg>} color={status === 'completed' ? 'green' : 'red'}>{status}</Tag>
      ),
    },
    {
      title: 'Ngày sử dụng',
      dataIndex: 'dateUse',
      key: 'dateUse',
    },
    {
      title: 'Ngày xuất vé',
      dataIndex: 'exportTicket',
      key: 'exportTicket',
    },
    {
      title: 'Cổng check-in',
      dataIndex: 'checkin',
      key: 'checkin',
    },
   
  ];

  const data = [
    {
      key: '1',
      ticketCode: '1',
      bookingCode: 'ALT46372957',
      numberTicket: '135267489264',
      passengerName: 'Hội chợ triển lãm tiêu dùng 2021',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: ' Hết hạn',
    },
    {
      key: '2',
      ticketCode: '2',
      bookingCode: 'ALT46372957',
      numberTicket: '135267489264',
      passengerName: 'Hội chợ triển lãm tiêu dùng 2021',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: ' Hết hạn',
    },
    {
      key: '3',
      ticketCode: '3',
      bookingCode: 'ALT46372957',
      numberTicket: '135267489264',
      passengerName: 'Hội chợ triển lãm tiêu dùng 2021',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: ' Hết hạn',
    },
    {
      key: '4',
      ticketCode: '4',
      bookingCode: 'ALT46372957',
      numberTicket: '135267489264',
      passengerName: 'Hội chợ triển lãm tiêu dùng 2021',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: ' Hết hạn',
    },
    {
      key: '5',
      ticketCode: '5',
      bookingCode: 'ALT46372957',
      numberTicket: '135267489264',
      passengerName: 'Hội chợ triển lãm tiêu dùng 2021',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: ' Hết hạn',
    },
    {
      key: '6',
      ticketCode: '6',
      bookingCode: 'ALT46372957',
      numberTicket: '135267489264',
      passengerName: 'Hội chợ triển lãm tiêu dùng 2021',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: ' Hết hạn',
    },
  ];

  const paginationConfig = {
    position: 'center',
  };

  return (
    <div style={containerStyle}>
      <Row>
        <Col span={6} style={{ paddingTop: '20px', paddingLeft: '50px' }}>
          <div style={{ paddingBottom: '50px' }}><Logo /></div>
          <Navbar />
          <p style={{paddingTop: '400px'}}>Copyright <CopyrightOutlined /> 2020 Alta Sofware</p>
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
              <h1>Danh sách vé</h1>
            </Row>
            <Row style={{ paddingBottom: '40px' }}>
              <Col span={8}><Search /></Col>
              <Col span={10}></Col>
              <Col span={6}>
                <Space>
                  <CustomButton name="Lọc vé" icon={<FilterOutlined />} />
                  <CustomButton name="Xuất file (.csv)" />
                </Space>
              </Col>
            </Row>
            <Table columns={columns} dataSource={data} pagination={false} />
            <Row justify="center" style={{ marginTop: '20px' }}>
            <Pagination current={1} total={50} pageSize={1} hideOnSinglePage showSizeChanger={false} />
          </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TicketManagement;
