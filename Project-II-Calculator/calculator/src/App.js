import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      <div>
        <CalculatorDisplay/>
        <div className="buttons">
          <div className="numbers">
            <ActionButton text="clear" buttonStyle="num clear"/>
            <NumberButton text="7" buttonStyle="num"/>
            <NumberButton text="8" buttonStyle="num"/>
            <NumberButton text="9" buttonStyle="num"/>
            <NumberButton text="4" buttonStyle="num"/>
            <NumberButton text="5" buttonStyle="num"/>
            <NumberButton text="6" buttonStyle="num"/>
            <NumberButton text="1" buttonStyle="num"/>
            <NumberButton text="2" buttonStyle="num"/>
            <NumberButton text="3" buttonStyle="num"/>
            <ActionButton text="0" buttonStyle="num zero"/>
          </div>
          <div className="operators">
            <NumberButton text="/" buttonStyle="num operator" />
            <NumberButton text="X" buttonStyle="num operator" />
            <NumberButton text="+" buttonStyle="num operator" />
            <NumberButton text="-" buttonStyle="num operator" />
            <NumberButton text="=" buttonStyle="num operator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
