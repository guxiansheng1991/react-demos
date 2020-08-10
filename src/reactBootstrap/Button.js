import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from 'react-bootstrap/DropdownMenu';

function button() {
  return (
    <div>
      <ButtonToolbar>
        <Button>Default</Button>
        <Button>Primary</Button>
        <Button>Large button</Button>
        <Button block active>block button</Button>
      </ButtonToolbar>

      <hr />

      <ButtonGroup>
        <Button>左</Button>
        <Button>中</Button>
        <Button>右</Button>
        <DropdownButton title="下拉">
          <DropdownMenu>哈哈哈</DropdownMenu>
          <DropdownMenu>嘿嘿嘿</DropdownMenu>
        </DropdownButton>
      </ButtonGroup>
    </div>
  );
}
export default button;