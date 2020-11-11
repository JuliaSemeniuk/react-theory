import React from 'react';
import './App.css';
import LearnCSS from './CSS';

import HelloWorld from './LearnJS/001_helloWorld';
import Types from './LearnJS/003_types';
import Review from './TProg/02_Review';
import ObjectRecursion from './TProg/03_objectRecursion';
import CurrencyConverter from './TProg/04_CurrencyConverter';
import Alphabet from './TProg/05_Alphabet';
//import LearnCSS from './CSS/index'

function App() {
    return (
        <div className="App">
            {/* <Review /> */}
            {/* <LearnCSS/> */}
            {/* {<CurrencyConverter/>} */}
            {<Alphabet/>}
        </div>
    );
}

export default App;
