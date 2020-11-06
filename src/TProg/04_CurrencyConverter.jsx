import React from 'react'

function convertCurrency (amount, currency) {
    let result = 0;
    if (currency < 1) {
        result = amount*currency;
    } else {
        result = amount*currency;
    }
    return result;
}

export default class CurrencyConverter extends React.Component {
    render () {
        const amountToconvert = 100;
        const dollars = 0.85;
        const euros = 1.18;
        const converterDollarsToEuros = convertCurrency(amountToconvert, dollars);
        const converterEurosToDollars = convertCurrency(amountToconvert, euros);
        return (
            <div>
                <p>100$ is {converterDollarsToEuros}€</p>
                <p>100€ is {converterEurosToDollars}$</p>
            </div>
        )
    }
}