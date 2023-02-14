import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack } from 'react-bootstrap';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { result: 0 };
  }

  render() {
    const { result } = this.state;
    return (
      <Container className="w-25 mt-5  ">
        <Stack direction="horizontal" className="mx-auto">
          <div className="text-end w-100 bg-secondary text-white px-3">{result}</div>
        </Stack>
        <Stack direction="horizontal" className="mx-auto">
          <button type="button">A/C</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="orangeBtn">/</button>
        </Stack>
        <Stack direction="horizontal" className="mx-auto">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="orangeBtn">*</button>
        </Stack>
        <Stack direction="horizontal" className="mx-auto">
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="orangeBtn">-</button>
        </Stack>
        <Stack direction="horizontal" className="mx-auto">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="orangeBtn">+</button>
        </Stack>
        <Stack direction="horizontal" className="mx-auto">
          <button type="button" className="col-md-6">0</button>
          <button type="button">.</button>
          <button type="button" className="orangeBtn">=</button>
        </Stack>
      </Container>
    );
  }
}
export default Calculator;
