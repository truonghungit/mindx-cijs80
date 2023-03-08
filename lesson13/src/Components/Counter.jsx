import React, { useState } from "react";

export function CounterFn(props) {
  const [value, setValue] = useState(props.initValue);

  const increase = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initValue,
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    const state = this.state;
    return (
      <div>
        <h2>{state.value}</h2>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}
