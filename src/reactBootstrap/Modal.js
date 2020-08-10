import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ModalExample extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({
      show: true
    });
  }

  close() {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.open}>显示Modal</Button>
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>我是弹框标题</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>哈哈哈哈哈哈哈哈哈哈或哈哈哈或或或</h1>
            <h1>哈哈哈哈哈哈哈哈哈哈或哈哈哈或或或</h1>
            <h1>哈哈哈哈哈哈哈哈哈哈或哈哈哈或或或</h1>
            <h1>哈哈哈哈哈哈哈哈哈哈或哈哈哈或或或</h1>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>取消</Button>
            <Button onClick={this.close}>取消2</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;