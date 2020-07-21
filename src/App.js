import React, {Fragment} from 'react';
// import axios from 'axios';

import logo from './img/logo.png'

import './App.css';

 export default class App extends React.Component {
  render(){
    return(
      <Fragment>
        <div className="header">
          {/* <img src={logo} alt="Logo" className="logo-img"/>
          <h1 className="logo-text">Monetæ</h1> */}

          <ul>
            <li><img src={logo} alt="Logo" className="logo-img"/></li>
            <li><h1 className="logo-text">Monetæ</h1></li>
          </ul>
        </div>

      </Fragment>
    )
  }
}
