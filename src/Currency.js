import React from 'react'

export default function Currency(props) {
    const{
        data,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    
    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {data.map((option, index) => (
                    <option key= {index} value={option.currencyCode}>{option.country} {option.currencyCode}</option>
                ))}
            </select> 
        </div>
    )
}
