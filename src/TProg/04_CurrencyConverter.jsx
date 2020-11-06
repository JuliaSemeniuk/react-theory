import React from 'react'

export default class CurrencyConverter extends React.Component {

   constructor(props) {
       super(props);

       this.state = {
           converter: [
               {amount: '0', result: ''}
           ]
       }
   };

   onChangeAmount = (event) => {
       let currentAmount = event.target.value;
       this.setState({amount: currentAmount});
   };

   OnClickCurrency = (event) => {
       const {converter} = this.state;
       let currentResult;
       if (event.target.value === '$') {
           currentResult = converter.map((current)=>{
               return {
                   amount: current.amount,
                   result: current.amount*0.85,
               }
           })
       };
       this.setState({converter: currentResult})
   };

    render () {        
        const {converter, result} = this.state;
        return (
            <div>
               <input onChange={this.onChangeAmount} type='text' placeholder='amount' value={this.state.amount}></input>
               <input onClick={this.OnClickCurrency} type='radio' name='currency' value='$'></input>$
               <input onClick={this.OnClickCurrency} type='radio' name='currency' value='€'></input>€
               <input type='text' value={result}></input>
            </div>
        )
    }
}