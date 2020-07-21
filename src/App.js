import React, {Fragment} from 'react';

import {ConvertApi} from './API/ConvertApi'

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

          <div className="currency-main">
            <div className="title">
              <h1>Currency Convertor</h1>
            </div>
              <div className="select-options">
                <select name="slt1" id="slt-1">
                  <option >Select A Currency</option>
                  <option value="usd">USD</option>
                  <option value="inr">INR</option>
                </select>
                <select name="slt2" id="slt-2">
                  <option >Select A Currency</option>
                  <option value="usd">USD</option>
                  <option value="inr">INR</option>
                </select>
              </div>
          </div>
        </div>

      </Fragment>
    )
  }
}
