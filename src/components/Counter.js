// Importing necessary dependencies
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter.js";
import classes from "./Counter.module.css";

// Counter component
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // Handler for incrementing the counter
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  // Handler for increasing the counter by 5
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  // Handler for decrementing the counter
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  // Handler for toggling the counter visibility
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  // Render the Counter component
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
