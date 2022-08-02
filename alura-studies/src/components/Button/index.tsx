import React from "react";
import "./style.scss";

class Button extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <button className="button">Click Me</button>
      </>
    );
  }
}

export default Button;
