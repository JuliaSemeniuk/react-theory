import React from 'react'

export default class CurrencyConverter extends React.Component {

   constructor(props) {
       super(props);

       this.state = {
            amount: '',
            currency: '$',
            result: '',
            message: '€'
       };
   };

   onChangeAmount = (event) => {
       let currentAmount = event.target.value;
       let currentResult;
       const { amount, currency } = this.state;

       if (currency === '$') {
           currentResult = currentAmount * 0.85;
       } else {
        currentResult = currentAmount * 1.18;
       };
       this.setState({amount: currentAmount, result: currentResult});
       console.log(amount);
   };

   OnClickCurrency = (event) => {
       let currentCurrency = event.target.value;
       let currentResult;
       let currentMessage;
       const {amount} = this.state;
       if (currentCurrency === '$') {
            currentResult = amount * 0.85;
            currentMessage = '€'
            } else {
            currentResult = amount * 1.18;
            currentMessage = '$'
        };
       
       this.setState({currency: currentCurrency, result: currentResult, message: currentMessage});       
   };

    render () {        
        
        return (
            <div>
               <input onChange={this.onChangeAmount} type='text' placeholder='amount'></input>
               <input onClick={this.OnClickCurrency} type='radio' name='currency' value='$' checked={this.state.currency === '$'}></input>$
               <input onClick={this.OnClickCurrency} type='radio' name='currency' value='€'checked={this.state.currency === '€'}></input>€
               <input onClick={this.OnClickCurrency} type='text' value={this.state.result + this.state.message}></input>
               
            </div>
        )
    }
}