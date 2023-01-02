import { Component, createMemo, createSignal } from "solid-js";

const Counter: Component = () => {
  const [count, setCount] = createSignal(0);

  const counterClassName = createMemo(() => {
    if (count() > 0) {
      return "counter success";
    }

    if (count() < 0) {
      return "counter failure";
    }

    return "counter";
  });

  return (
    <div class="app">
      <div class="content">
        <button class="button" onClick={() => setCount((prev) => prev - 1)}>-</button>
        <div class={counterClassName()} id="counter">
          {count()}
        </div>
        <button class="button" onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
      <button class="button" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
