import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack } from 'react-bootstrap';

import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    operation: null,
    next: null,
  });

  const clickBtn = (btn) => {
    setState((state) => calculate(state, btn.target.name));
  };

  const { total, next, operation } = state;

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
        <button type="button" name="AC" onClick={clickBtn}>AC</button>
        <button type="button" name="+/-" onClick={clickBtn}>+/-</button>
        <button type="button" name="%" onClick={clickBtn}>%</button>
        <button type="button" name="÷" className="orangeBtn" onClick={clickBtn}>÷</button>
      </Stack>
      <Stack direction="horizontal" className="mx-auto">
        <button type="button" name="7" onClick={clickBtn}>7</button>
        <button type="button" name="8" onClick={clickBtn}>8</button>
        <button type="button" name="9" onClick={clickBtn}>9</button>
        <button type="button" name="x" className="orangeBtn" onClick={clickBtn}>x</button>
      </Stack>
      <Stack direction="horizontal" className="mx-auto">
        <button type="button" name="4" onClick={clickBtn}>4</button>
        <button type="button" name="5" onClick={clickBtn}>5</button>
        <button type="button" name="6" onClick={clickBtn}>6</button>
        <button type="button" name="-" className="orangeBtn" onClick={clickBtn}>-</button>
      </Stack>
      <Stack direction="horizontal" className="mx-auto">
        <button type="button" name="1" onClick={clickBtn}>1</button>
        <button type="button" name="2" onClick={clickBtn}>2</button>
        <button type="button" name="3" onClick={clickBtn}>3</button>
        <button type="button" name="+" className="orangeBtn" onClick={clickBtn}>+</button>
      </Stack>
      <Stack direction="horizontal" className="mx-auto">
        <button type="button" name="0" className="col-md-6" onClick={clickBtn}>0</button>
        <button type="button" name="." onClick={clickBtn}>.</button>
        <button type="button" name="=" className="orangeBtn" onClick={clickBtn}>=</button>
      </Stack>
    </Container>
  );
};
export default Calculator;
