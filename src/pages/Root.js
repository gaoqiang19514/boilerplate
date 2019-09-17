import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import './Root.css'
import bg from './bg.png'

class Root extends Component {
  constructor(props) {
    super(props);

    this.handleToggleClick = this.handleToggleClick.bind(this);

    this.state = {
      flag: true
    };
  }

  handleToggleClick() {
    const { flag } = this.state
    this.setState({ flag: !flag })
  }

  render() {
    const { flag } = this.state
    return (
      <div>
        <h1>Root</h1>

        <CSSTransition
          in={flag}
          timeout={300}
          classNames="fade"
          appear
          unmountOnExit
        >
          <img src={bg} alt="背景" />
        </CSSTransition>
        <button type="button" onClick={this.handleToggleClick}>
          toggle
        </button>
      </div>
    );
  }
}

export default Root;
