import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <div>Counter: {this.props.initial}</div>
        <button onClick={e => this.props.incrementDispatch}>+</button>
        <button onClick={e => this.props.decrementDispatch}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initial: state.initial,
  interval: state.interval
});

const incrementDispatch = {
  type: "INCREMENT"
};

const decrementDispatch = {
  type: "INCREMENT"
};

const mapDispatchToProps = { incrementDispatch, decrementDispatch };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
