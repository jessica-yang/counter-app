import { createStore } from "redux";

const reducer = (previousState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...previousState,
        initial: previousState.initial + previousState.interval
      };
    case "DECREMENT":
      return {
        ...previousState,
        initial: previousState.initial - previousState.interval
      };
    default:
      return previousState;
  }
};

export default createStore(reducer, { initial: 0, interval: 5 });
