import React, { useState } from 'react';
import { Col, Row, Space, Table, Tag, Pagination, Button } from 'antd';
import { FilterOutlined, MoreOutlined } from '@ant-design/icons';
import Search from "antd/es/transfer/search";
import Logo from "../component/logo";
import Navbar from "../component/navbar";
import Account from "../component/account";
import CustomButton from '../component/button';
import type { ColumnsType } from 'antd/es/table';
import { Modal } from 'antd';
import Date from '../component/fill';
import Checkbox1 from '../component/chekcbox';
import RadioButton from '../component/radio';
import HorizontalAnchor from '../component/anchor';
import { GrayTag, RedTag, GreenTag } from '../component/status';

// Sử dụng các component trong render function


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
      title: 'Tình trạng',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        if (status === 'Chưa sử dụng') {
          return <GreenTag status={status} />;
        } else if (status === 'Đã sử dụng') {
          return <GrayTag status={status} />;
        } else if (status === 'Hết hạn') {
          return <RedTag status={status} />;
        }
      },
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
    {
      title: '',
      dataIndex: 'outline',
      key: 'outline',
      render: (text: string, record: any) => (
        record.status === 'Chưa sử dụng' && (
          <Button icon={<MoreOutlined />} onClick={handleShowModal} />
        )
      ),
    },


  ];

  const familyColumns: ColumnsType<any> = [
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
      title: 'Tình trạng sử dụng',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        if (status === 'Chưa sử dụng') {
          return <GreenTag status={status} />;
        } else if (status === 'Đã sử dụng') {
          return <GrayTag status={status} />;
        } else if (status === 'Hết hạn') {
          return <RedTag status={status} />;
        }
      },
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
    {
      title: '',
      dataIndex: 'outline',
      key: 'outline',
      render: (text: string, record: any) => (
        record.status === 'Chưa sử dụng' && (
          <Button icon={<MoreOutlined />} onClick={handleShowModal} />
        )
      ),
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
      status: 'Đã sử dụng',

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
      status: 'Đã sử dụng',
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
      status: 'Đã sử dụng',
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
      status: 'Chưa sử dụng',

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
      status: 'Chưa sử dụng',

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
      status: 'Hết hạn',
    },
  ];

  const familyData = [
    {
      key: '1',
      ticketCode: '1',
      bookingCode: 'ALT46372957',
      numberTicket: '135267489264',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: 'Hết hạn',
    },
    {
      key: '2',
      ticketCode: '2',
      bookingCode: 'ALT46372957',
      numberTicket: '135267489264',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: 'Hết hạn',
    },
    {
      key: '3',
      ticketCode: '3',
      bookingCode: 'ALT46372957',
      numberTicket: '135267489264',
      dateUse: '14/04/2021',
      exportTicket: '14/04/2021',
      checkin: 'Cổng 1',
      status: 'Chưa sử dụng',
    },
  ];

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showEventTable, setShowEventTable] = useState(false);
  const [showFamilyTable, setShowFamilyTable] = useState(false); // Trạng thái bảng gói gia đình
  const [showModal, setShowModal] = useState(false);


  const handleShowFilterModal = () => {
    setShowFilterModal(true);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };


  const handleAnchorClick = (item: string) => {
    if (item === 'Gói sự kiện') {
      setShowEventTable(true);
      setShowFamilyTable(false);
    } else if (item === 'Gói gia đình') {
      setShowEventTable(false);
      setShowFamilyTable(true); // Hiển thị bảng gói gia đình
    } else {
      setShowEventTable(false);
      setShowFamilyTable(false);
    }
  };

  const paginationConfig = {
    position: 'center',
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
              <h1>Danh sách vé</h1>
            </Row>
            <Row>
              <HorizontalAnchor
                firstItem="Gói gia đình"
                secondItem="Gói sự kiện"
                onItemClick={handleAnchorClick}
              />
            </Row>
            <Row style={{ paddingBottom: '40px' }}>
              <Col span={8}><Search /></Col>
              <Col span={10}></Col>
              <Col span={6}>
                <Space>
                  <CustomButton name="Lọc vé" icon={<FilterOutlined />} onClick={handleShowFilterModal} />
                  <CustomButton name="Xuất file (.csv)" />
                </Space>
              </Col>
              <Modal
                title="Lọc vé"
                visible={showFilterModal}
                onCancel={() => setShowFilterModal(false)}
                footer={null}
              >
                <div style={{ paddingLeft: '30px' }}>
                  <Row>
                    <Col style={{ marginRight: '60px' }}>
                      <p>Từ ngày</p>
                      <Date />
                    </Col>

                    <Col>
                      <p>Đến ngày</p>
                      <Date />
                    </Col>
                  </Row>
                  {/*tinh trang su dung*/}
                  <Row><b style={{ paddingTop: '20px' }}>Tình trạng sử dụng</b></Row>
                  <Row>
                    <Col>
                      <RadioButton name='Tất cả' />
                    </Col>
                    <Col>
                      <RadioButton name='Đã sử dụng' />
                    </Col>
                    <Col>
                      <RadioButton name='Chưa sử dụng' />
                    </Col>
                    <Col>
                      <RadioButton name='Hết hạn' />
                    </Col>
                  </Row>
                  {/*cong check-in*/}
                  <Row><b style={{ paddingTop: '20px' }}>Cổng Check-in</b></Row>
                  <Row>
                    <Col span={8}>
                      <Checkbox1 name='Tất cả' />
                    </Col>
                    <Col span={8}>
                      <Checkbox1 name='Cổng 1' />
                    </Col>
                    <Col span={8}>
                      <Checkbox1 name='Cổng 2' />
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: '10px' }}>
                    <Col span={8}>
                      <Checkbox1 name='Cổng 3' />
                    </Col>
                    <Col span={8}>
                      <Checkbox1 name='Cổng 4' />
                    </Col>
                    <Col span={8}>
                      <Checkbox1 name='Cổng 5' />
                    </Col>
                  </Row>
                  {/*button*/}
                  <Row style={{ paddingTop: '20px', paddingLeft: '140px' }}>
                  <Space >
                      <CustomButton name="Lọc" />
                    </Space>
                  </Row>
                </div>
              </Modal>
            </Row>
            {showEventTable && (
              <Table columns={columns} dataSource={data} pagination={false} />
            )}
            {showFamilyTable && (
              <Table columns={familyColumns} dataSource={familyData} pagination={false} />
            )}

            {/*cửa sổ đổi ngày sử dụng vé*/}
            <Modal
              title="Đổi ngày sử dụng vé"
              visible={showModal}
              onCancel={() => setShowModal(false)}
              footer={null}
            >
              <Row>
                <Col span={8}><b>Booking code</b></Col>
                <Col>	ALT46372957</Col>
              </Row>
              <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
                <Col span={8}><b>Số vé</b></Col>
                <Col>135267489264</Col>
              </Row>
              <Row>
                <Col span={8}><b>Tên sự kiện</b></Col>
                <Col>Hội chợ triển lãm tiêu dùng 2021</Col>
              </Row>
              <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
                <Col span={8}><b>Hạn sử dụng</b></Col>
                <Col> <Date /></Col>
              </Row>
              <Row style={{paddingTop:'15px', paddingLeft:'100px'}}>
              <Space >
                      <CustomButton name="Lọc" />
                      <Button style={{ background: '#FF993C', color: 'white', width:'120px' }}  ><b>Lưu</b></Button>
              </Space>
              </Row>

            </Modal>

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
