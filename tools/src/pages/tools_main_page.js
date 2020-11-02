import React from 'react';
import { Link } from 'react-router-dom';

class GrouperPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!!! Tools Available: </h1>
        <ul>
          <li><Link to='/grouper'>分组器</Link></li>
        </ul>
      </div>
    );
  }
}

export default GrouperPage;
