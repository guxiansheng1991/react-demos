import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';

class NavExample extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav
          variant="tabs"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default NavExample;