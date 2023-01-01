import { Component, createMemo, createSignal } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  const counterClassName = createMemo(() => {
    if (count() > 0) {
      return "success";
    }

    if (count() < 0) {
      return "failure";
    }
  });

  return (
    <div id="app">
      <div class="content">
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <div class={counterClassName()} id="counter">
          {count()}
        </div>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
