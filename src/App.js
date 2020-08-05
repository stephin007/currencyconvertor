import React, {Fragment, useEffect, useState} from 'react';
import ReactGa from 'react-ga'
// COMPONENTS
import Currency from './Currency'
// Assets
import logo from './img/logo.png'

// CSS
import './App.css';

// API
const BASE_URL = 'https://api.exchangeratesapi.io/latest'

 export default function App(){

  useEffect(
    () => {
      ReactGa.initialize('UA-174554368-1')

      // to report page view
      ReactGa.pageview('/')
    },
    [],
  )

  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);


  let toAmount, fromAmount
  if(amountInFromCurrency){
    fromAmount = amount
    toAmount = amount * exchangeRate
  }else{
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
        fetch(BASE_URL)
          .then(res=> res.json())
          .then(data => {
            const firstCurrency = Object.keys(data.rates)[11]
            setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            setFromCurrency(data.base)
            setToCurrency(firstCurrency)
            setExchangeRate(data.rates[firstCurrency])
          })
    }, [])

    useEffect(() => {
      if (fromCurrency != null && toCurrency != null) {
        fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
          .then(res => res.json())
          .then(data => setExchangeRate(data.rates[toCurrency]))
      }
    }, [fromCurrency, toCurrency])

    function handleFromAmountChange(e){
      setAmount(e.target.value)
      setAmountInFromCurrency(true)
    }

    function handleToAmountChange(e){
      setAmount(e.target.value)
      setAmountInFromCurrency(false)
    }


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
            <Currency 
              currencyOptions={currencyOptions}
              selectedCurrency={fromCurrency}
              onChangeCurrency={e => setFromCurrency(e.target.value)}
              onChangeAmount={handleFromAmountChange}
              amount={fromAmount}
            />
            <div className="equals">=</div>
            <Currency 
              currencyOptions={currencyOptions}
              selectedCurrency={toCurrency}
              onChangeCurrency={e => setToCurrency(e.target.value)}
              onChangeAmount={handleToAmountChange}
              amount= {toAmount}
            />  
          </div>
        </div>
        <div className="social-link no-select">
            <a href="https://github.com/stephin007/currencyconvertor" target="_blank" rel = "noopener noreferrer"><i className= "fa fa-github"></i></a>
        </div>

      </Fragment>
    )
}

