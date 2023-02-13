import React from 'react';
import './index.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <div className="App ">
        <Calculator />
      </div>
    );
  }
}
export default App;
