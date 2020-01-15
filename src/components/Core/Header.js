import React, { Component } from 'react'
import { Layout } from 'antd'

const { Header } = Layout;

export default class MainHeader extends Component {
  state = {
    wipId: 120000,
    position: 'ประธานค่าย',
    name: 'โตโต้ซัง'
  }

  render() {
    return (
      <Header style={{textAlign: 'right',color:'white'}}>
          {this.state.name} ({this.state.position}) {" "}{" "}
          <button class="btn ant-btn-danger">Logout</button>
      </Header>
    )
  }
}
