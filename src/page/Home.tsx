import Navbar from "../component/navbar";
import Logo from "../component/logo";
import { Col, Row } from 'antd';
import Search from "antd/es/transfer/search";
import Account from "../component/account";


const Home: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={18} push={6}>
          <Row>
            <Col span={6} style={{ padding: '20px 0px 50px 0px' }}>
              <Search />

            </Col>
            <Col span={6} offset={12}> <Account /></Col>
          </Row>
        </Col>
        <Col span={6} pull={18} style={{ paddingTop:'20px', paddingLeft:'50px' }}>
          <div style={{ paddingBottom:'50px'}}><Logo /></div>
          <Navbar />
        </Col>
      </Row>
    </>
  )
}

export default Home;