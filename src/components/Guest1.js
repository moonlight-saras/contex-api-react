import React, { Component } from 'react'
import {Consumer} from "../contex/Contex"
export default class Guest1 extends Component {
  render() {
    return (
      <div>
        <h3>Guest</h3>
    <Consumer>
    {data => <h4>{data}</h4>}
    </Consumer>
      </div>
    )
  }
}
