import React from 'react';
import { Input, List, Row, Col } from 'antd';

import './../css/grouper_page.css';

class GrouperPage extends React.Component {
  render() {
    return (
      <div className="grouper-container">
        <Row>
          <Col span={6}>
            回车输入姓名
            <Input />
          </Col>
          <Col span={6} offset={12}>
            something
          </Col>
        </Row>
      </div>
    );
  }
}

export default GrouperPage;
