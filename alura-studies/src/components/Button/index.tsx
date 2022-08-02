import React from "react";
import "./style.scss";

class Button extends React.Component<any, any> {
  render(): React.ReactNode {
    return (
      <>
        <button className="button">{this.props.children}</button>
      </>
    );
  }
}

export default Button;
