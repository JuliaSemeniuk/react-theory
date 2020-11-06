import React from 'react'

export default class CurrencyConverter extends React.Component {

   constructor(props) {
       super(props);

       this.state = {
           amount: 0,
           result: '',
       };
   };

   onChangeAmount = (event) => {
       let currentAmount = event.target.value;
       this.setState({amount: currentAmount});
   };

   OnClickCurrency = (event) => {
       let currentResult;
       const { amount } = this.state;

       if (event.target.value === '$') {
           currentResult = parseInt(amount) * 0.85;
       } else {
        currentResult = amount * 1.18;
       };
       this.setState({result: currentResult});
       console.log(amount)
   };

    render () {        
        
        return (
            <div>
               <input onChange={this.onChangeAmount} type='text' placeholder='amount'></input>
               <input onClick={this.OnClickCurrency} type='radio' name='currency' value='$'></input>$
               <input onClick={this.OnClickCurrency} type='radio' name='currency' value='€'></input>€
               <input onClick={this.OnClickCurrency} type='text' value={this.state.result}></input>
            </div>
        )
    }
}