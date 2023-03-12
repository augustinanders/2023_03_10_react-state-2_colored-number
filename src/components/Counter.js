import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

function Buttons({ onIncrement, onDecrement }) {
  return (
    <div className="counter__buttons-container">
      <button
        type="button"
        className="counter__button"
        aria-label="increment count"
        onClick={onIncrement}
      >
        +
      </button>
      <button
        type="button"
        className="counter__button"
        aria-label="decrement count"
        onClick={onDecrement}
      >
        -
      </button>
    </div>
  );
}

export default function Counter() {
  const [value, setValue] = useState(0);

  function handleIncrement() {
    setValue(value + 1);
    console.log(value);
  }
  function handleDecrement() {
    setValue(value - 1);
    console.log(value);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <Buttons onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
}
