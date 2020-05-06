import React, { Component } from 'react'
import User from "../src/components/User";
// import Guest1 from "../src/components/Guest1";
import {Provider} from '../src/contex/Contex'
// import { Route, Switch } from "react-router-dom";
  
export default class App extends Component {
  state ={
    name:'moonlight-saras'}

  render() {
    return (
     
     <Provider value={this.state.name}>
       <User />
     </Provider>
      // <Switch>
      //   <Route exact path="/" component={Guest1} />
      //   <Route exact path="/" component={User} />
      // </Switch>
    )
  }
}
