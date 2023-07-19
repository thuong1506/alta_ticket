import React, { useState } from 'react';
import { Col, Row, Space, Table, Tag, Pagination, Button, Modal, Mentions, DatePicker, Dropdown, Menu } from 'antd';
import { FormOutlined, CalendarOutlined, ClockCircleOutlined, DownOutlined } from '@ant-design/icons';
import Search from "antd/es/transfer/search";
import Logo from "../component/logo";
import Navbar from "../component/navbar";
import Account from "../component/account";
import CustomButton from '../component/button';
import type { ColumnsType } from 'antd/es/table';
import { RedTag, GreenTag } from '../component/status';
import RadioButton from '../component/radio';
import Checkbox from '../component/chekcbox';
import Date from '../component/fill';
import Time from '../component/date';
import '../css/TicketManagement.css';
import XLSX from 'xlsx';


const TicketManagement: React.FC = () => {

    const handleExportExcel = () => {
        // Tạo một workbook mới
        const workbook = XLSX.utils.book_new();
      
        // Tạo một worksheet mới từ dữ liệu bảng
        const worksheet = XLSX.utils.json_to_sheet(data);
      
        // Thêm worksheet vào workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      
        // Tạo tệp Excel từ workbook và lưu nó
        XLSX.writeFile(workbook, 'goive.xlsx');
      };
      

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
            title: 'Mã gói',
            dataIndex: 'bookingCode',
            key: 'bookingCode',
        },
        {
            title: 'Tên gói vé',
            dataIndex: 'nameFare',
            key: 'nameFare',
        },
        {
            title: 'Ngày và giờ áp dụng',
            dataIndex: 'dateUse',
            key: 'dateUse',
            render: (dateUse: any) => <Time datetime={dateUse} />,
        },
        {
            title: 'Ngày và giờ hết hạn',
            dataIndex: 'exportTicket',
            key: 'exportTicket',
            render: (exportTicket: any) => <Time datetime={exportTicket} />,
        },
        {
            title: 'Giá vé (VND/Vé)',
            dataIndex: 'fare',
            key: 'fare',
        },
        {
            title: 'Giá combo (VND/Combo)',
            dataIndex: 'fareCombo',
            key: 'fareCombo',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                if (status === 'Đang áp dụng') {
                    return <GreenTag status={status} />;
                } else if (status === 'Tắt') {
                    return <RedTag status={status} />;
                }
            },
        },
        {
            title: '',
            dataIndex: 'checkin',
            key: 'checkin',
            render: () => (
                <span className="custom-icon" onClick={handleIconClick} style={{ fontSize: '16px', color: '#FF993C' }} >
                    <FormOutlined />
                    Cập nhật
                </span>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            ticketCode: '1',
            bookingCode: 'ALT46372957',
            nameFare: 'Gói gia đình',
            fare: '90.000 VNĐ',
            fareCombo: '360.000 VNĐ/4 vé',
            dateUse: {
                date: '14/04/2021',
                time: '09:30',
            },
            exportTicket: {
                date: '14/04/2021',
                time: '17:45',
            },
            status: 'Đang áp dụng',
            checkin: '',
        },
        {
            key: '2',
            ticketCode: '2',
            bookingCode: 'ALT46372957',
            nameFare: 'Gói gia đình',
            fare: '90.000 VNĐ',
            fareCombo: '360.000 VNĐ/4 vé',
            dateUse: {
                date: '14/04/2021',
                time: '09:30',
            },
            exportTicket: {
                date: '14/04/2021',
                time: '17:45',
            },
            status: 'Tắt',
            checkin: '',
        },
    ];

    const [showUpdateWindow, setShowUpdateWindow] = useState(false);
    const [showAddWindow, setShowAddWindow] = useState(false);

    const handleIconClick = () => {
        setShowUpdateWindow(true);
    };

    const handleMenuClick = (e: any) => {
        console.log('Clicked:', e.key);
    };

    const handleAddButtonClick = () => {
        setShowAddWindow(true);
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="applying">Đang áp dụng</Menu.Item>
            <Menu.Item key="off">Tắt</Menu.Item>
        </Menu>
    );

    return (
        <div style={containerStyle}>
            <Row>
                <Col span={5} style={{ paddingTop: '20px', paddingLeft: '50px' }}>
                    <div style={{ paddingBottom: '50px' }}><Logo /></div>
                    <Navbar />
                    <p style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        padding: '10px',
                    }}>Copyright © 2020 Alta Sofware </p>
                </Col>
                <Col span={19}>
                    <Row>
                        <Col span={8} style={{ padding: '20px 0px 50px 0px' }}>
                            <Search />
                        </Col>
                        <Col span={12}></Col>
                        <Col span={4}><Account /></Col>
                    </Row>
                    <div style={ticketListContainerStyle}>
                        <Row>
                            <h1>Danh sách gói vé</h1>
                        </Row>
                        <Row>
                            <Col span={8}><Search /></Col>
                            <Col span={10}></Col>
                            <Col span={6}>
                                <Space>
                                    <CustomButton name="Xuất file (.csv)" onClick={handleExportExcel}/>
                                    <Button style={{ background: '#FF993C', color: 'white', width: '120px' }} onClick={handleAddButtonClick}>
                                        <b>Thêm gói vé</b>
                                    </Button>
                                </Space>
                            </Col>
                        </Row>
                        <Row style={{ paddingTop: '20px' }}>
                            <Col span={24}>
                                <Table columns={columns} dataSource={data} pagination={false} />
                                <Row justify="center" style={{ marginTop: '20px' }}>
                                    <Pagination current={1} total={50} pageSize={1} hideOnSinglePage showSizeChanger={false} />
                                </Row>
                            </Col>
                            {/* cửa sổ khi nhấn vào icon cập nhật */}
                            <Modal
                                title={<div className="modal-title">Cập nhật thông tin gói vé</div>}
                                visible={showUpdateWindow}
                                onCancel={() => setShowUpdateWindow(false)}
                                footer={null}
                                centered
                            >
                                <Row>
                                    <Col span={11}>
                                        <b>Mã sự kiện<span style={{ color: '#FD5959' }}>*</span></b>
                                        <Mentions style={{ width: '80%', marginTop: '10px' }} />
                                    </Col>
                                    <Col span={13}>
                                        <b>Tên sự kiện</b>
                                        <Mentions style={{ width: '80%', marginTop: '10px' }} />
                                    </Col>
                                </Row>
                                <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                                    <Col span={11}>
                                        <Row><b>Ngày áp dụng</b></Row>
                                        <Row style={{ marginTop: '10px' }}>
                                            <Col span={12}> <DatePicker
                                                suffixIcon={<CalendarOutlined style={{ color: '#FF993C' }} />}
                                                showTime={{ format: 'HH:mm' }}
                                                style={{ marginRight: '10px' }}
                                            /></Col>
                                            <Col span={12}><DatePicker
                                                suffixIcon={<ClockCircleOutlined style={{ color: '#FF993C' }} />}
                                                showTime={{ format: 'HH:mm' }}
                                            /></Col>
                                        </Row>
                                    </Col>

                                    <Col span={13}>
                                        <Row><b>Ngày hết hạn</b></Row>
                                        <Row style={{ marginTop: '10px' }}>
                                            <Col span={12}> <DatePicker
                                                suffixIcon={<CalendarOutlined style={{ color: '#FF993C' }} />}
                                                showTime={{ format: 'HH:mm' }}
                                                style={{ marginRight: '10px', marginLeft: '15px' }}
                                            /></Col>
                                            <Col span={12}><DatePicker
                                                suffixIcon={<ClockCircleOutlined style={{ color: '#FF993C' }} />}
                                                showTime={{ format: 'HH:mm' }} /></Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>Giá vé áp dụng</b>
                                        <Row style={{ marginTop: '10px' }} align="middle">
                                            <Col span={9}>
                                                <Checkbox name='Vé lẻ (vnđ/vé) với giá' />
                                            </Col>
                                            <Col span={6}>
                                                <Mentions placeholder="Giá vé" style={{ backgroundColor: '#A5A8B1', opacity: 'opacity: 0.699999988079071;' }} />
                                            </Col>
                                            <Col span={9}>
                                                /vé
                                            </Col>
                                        </Row>
                                        <Row style={{ marginTop: '10px' }} align="middle">
                                            <Col span={9}>
                                                <Checkbox name='Combo vé với giá' />
                                            </Col>
                                            <Col span={6}>
                                                <Mentions placeholder="Giá vé" style={{ backgroundColor: '#A5A8B1', opacity: 'opacity: 0.699999988079071;' }} />

                                            </Col>
                                            <Col span={1}>/</Col>
                                            <Col span={4}>

                                                <Mentions placeholder="Giá vé" style={{ backgroundColor: '#A5A8B1', opacity: 'opacity: 0.699999988079071;' }} />
                                            </Col>
                                            <Col span={4}>
                                                vé
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                                    <b style={{ paddingBottom: '10px' }}>Tình trạng</b>
                                    <Dropdown.Button
                                        overlay={menu}
                                        trigger={['click']}
                                        icon={<DownOutlined style={{ color: '#FF993C' }} />}
                                    >
                                        Chọn tình trạng
                                    </Dropdown.Button><p><b style={{ color: '#FD5959' }}>*</b> <i style={{ opacity: '60%', fontSize: 'small' }}>là thông tin bắt buộc</i></p>
                                </Row>
                                <Row>
                                    <Space style={{ paddingLeft: '120px' }}>
                                        <CustomButton name="Hủy" />
                                        <Button style={{ background: '#FF993C', color: 'white', width: '120px' }}><b>Lưu</b></Button>
                                    </Space>
                                </Row>
                            </Modal>
                            {/* của sổ hiện ra khi nhấn nút thêm mới gói vé */}
                            <Modal
                                title={<div className="modal-title">Thêm gói vé</div>}
                                visible={showAddWindow}
                                onCancel={() => setShowAddWindow(false)}
                                footer={null}
                                centered
                            >
                                <Row>
                                   <Col span={24}>
                                   <b>Tên gói vé </b><b style={{ color: '#FD5959' }}>*</b> <br />
                                    <Mentions placeholder='Nhập tên gói vé' style={{marginTop:'10px' , width:'60%'}}/>
                                   </Col>
                                </Row>
                                <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                                    <Col span={11}>
                                        <Row><b>Ngày áp dụng</b></Row>
                                        <Row style={{ marginTop: '10px' }}>
                                            <Col span={12}> <DatePicker
                                                suffixIcon={<CalendarOutlined style={{ color: '#FF993C' }} />}
                                                showTime={{ format: 'HH:mm' }}
                                                style={{ marginRight: '10px' }}
                                            /></Col>
                                            <Col span={12}><DatePicker
                                                suffixIcon={<ClockCircleOutlined style={{ color: '#FF993C' }} />}
                                                showTime={{ format: 'HH:mm' }}
                                            /></Col>
                                        </Row>
                                    </Col>

                                    <Col span={13}>
                                        <Row><b>Ngày hết hạn</b></Row>
                                        <Row style={{ marginTop: '10px' }}>
                                            <Col span={12}> <DatePicker
                                                suffixIcon={<CalendarOutlined style={{ color: '#FF993C' }} />}
                                                showTime={{ format: 'HH:mm' }}
                                                style={{ marginRight: '10px', marginLeft: '15px' }}
                                            /></Col>
                                            <Col span={12}><DatePicker
                                                suffixIcon={<ClockCircleOutlined style={{ color: '#FF993C' }} />}
                                                showTime={{ format: 'HH:mm' }} /></Col>
                                        </Row>
                                        
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>Giá vé áp dụng</b>
                                        <Row style={{ marginTop: '10px' }} align="middle">
                                            <Col span={9}>
                                                <Checkbox name='Vé lẻ (vnđ/vé) với giá' />
                                            </Col>
                                            <Col span={6}>
                                                <Mentions placeholder="Giá vé" style={{ backgroundColor: '#A5A8B1', opacity: 'opacity: 0.699999988079071;' }} />
                                            </Col>
                                            <Col span={9}>
                                                /vé
                                            </Col>
                                        </Row>
                                        <Row style={{ marginTop: '10px' }} align="middle">
                                            <Col span={9}>
                                                <Checkbox name='Combo vé với giá' />
                                            </Col>
                                            <Col span={6}>
                                                <Mentions placeholder="Giá vé" style={{ backgroundColor: '#A5A8B1', opacity: 'opacity: 0.699999988079071;' }} />

                                            </Col>
                                            <Col span={1}>/</Col>
                                            <Col span={4}>

                                                <Mentions placeholder="Giá vé" style={{ backgroundColor: '#A5A8B1', opacity: 'opacity: 0.699999988079071;' }} />
                                            </Col>
                                            <Col span={4}>
                                                vé
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                                    <b style={{ paddingBottom: '10px' }}>Tình trạng</b>
                                    <Dropdown.Button
                                        overlay={menu}
                                        trigger={['click']}
                                        icon={<DownOutlined style={{ color: '#FF993C' }} />}
                                    >
                                        Chọn tình trạng
                                    </Dropdown.Button><p><b style={{ color: '#FD5959' }}>*</b> <i style={{ opacity: '60%', fontSize: 'small' }}>là thông tin bắt buộc</i></p>
                                </Row>
                                <Row>
                                    <Space style={{ paddingLeft: '120px' }}>
                                        <CustomButton name="Hủy" />
                                        <Button style={{ background: '#FF993C', color: 'white', width: '120px' }}><b>Lưu</b></Button>
                                    </Space>
                                </Row>
                            </Modal>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default TicketManagement;
