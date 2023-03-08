import { Component, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export function NameCardFn(props) {
  const theme = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <div>
      {props.value.name}
      <div>Name: {props.name}</div>
      <div>Age: {props.age}</div>
    </div>
  );
}

export class NameCardClass extends Component {
  static contextType = ThemeContext;

  render() {
    console.log("theme NameCardClass", this.context);

    return (
      <div>
        <ThemeContext.Consumer>
          {(value) => {
            console.log("Consumer", value);
            return (
              <>
                <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div>
              </>
            );
          }}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
