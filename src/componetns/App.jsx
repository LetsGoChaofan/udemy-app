import { render } from '@testing-library/react';
import React from 'react';

const App = () => {
  return (
    <Counter></Counter>
  );
}

const Counter = () => {
  const Count = React.useState(0);

  const handlePlusButton = () => {
    const currentCount = this.state.count;
    this.setState({ count: Count + 1})
  }

    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button>-1</button>
      </React.Fragment>
    );
}

export default App;
