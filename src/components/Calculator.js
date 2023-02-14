import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack } from 'react-bootstrap';

import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  };

  render() {
    const { total, operation, next } = this.state;
    return (

      <Container className="w-25 mt-5  ">
        <Stack direction="horizontal" className="mx-auto bg-secondary resultContainer">
          <div className="text-end w-100 bg-secondary text-white px-3">
            <span>{total}</span>
            <span>{operation}</span>
            <span>{next}</span>
          </div>
        </Stack>
        <Stack direction="horizontal" className="mx-auto">
          <button type="button" name="AC" onClick={(e) => this.handleEvent(e.target.name)}>AC</button>
          <button type="button" name="+/-" onClick={(e) => this.handleEvent(e.target.name)}>+/-</button>
          <button type="button" name="%" onClick={(e) => this.handleEvent(e.target.name)}>%</button>
          <button type="button" name="÷" className="orangeBtn" onClick={(e) => this.handleEvent(e.target.name)}>÷</button>
        </Stack>
        <Stack direction="horizontal" className="mx-auto">
          <button type="button" name="7" onClick={(e) => this.handleEvent(e.target.name)}>7</button>
          <button type="button" name="8" onClick={(e) => this.handleEvent(e.target.name)}>8</button>
          <button type="button" name="9" onClick={(e) => this.handleEvent(e.target.name)}>9</button>
          <button type="button" name="x" className="orangeBtn" onClick={(e) => this.handleEvent(e.target.name)}>x</button>
        </Stack>
        <Stack direction="horizontal" className="mx-auto">
          <button type="button" name="4" onClick={(e) => this.handleEvent(e.target.name)}>4</button>
          <button type="button" name="5" onClick={(e) => this.handleEvent(e.target.name)}>5</button>
          <button type="button" name="6" onClick={(e) => this.handleEvent(e.target.name)}>6</button>
          <button type="button" name="-" className="orangeBtn" onClick={(e) => this.handleEvent(e.target.name)}>-</button>
        </Stack>
        <Stack direction="horizontal" className="mx-auto">
          <button type="button" name="1" onClick={(e) => this.handleEvent(e.target.name)}>1</button>
          <button type="button" name="2" onClick={(e) => this.handleEvent(e.target.name)}>2</button>
          <button type="button" name="3" onClick={(e) => this.handleEvent(e.target.name)}>3</button>
          <button type="button" name="+" className="orangeBtn" onClick={(e) => this.handleEvent(e.target.name)}>+</button>
        </Stack>
        <Stack direction="horizontal" className="mx-auto">
          <button type="button" name="0" className="col-md-6" onClick={(e) => this.handleEvent(e.target.name)}>0</button>
          <button type="button" name="." onClick={(e) => this.handleEvent(e.target.name)}>.</button>
          <button type="button" name="=" className="orangeBtn" onClick={(e) => this.handleEvent(e.target.name)}>=</button>
        </Stack>
      </Container>
    );
  }
}
export default Calculator;
