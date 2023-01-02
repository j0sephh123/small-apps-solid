import { Link, Route, Routes } from "@solidjs/router";
import { Component } from "solid-js";
import Counter from "./Counter";

const App: Component = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Link href="/">Home</Link>
            <Link href="/counter">Counter</Link>
          </>
        }
      />
      <Route path="/counter" component={Counter} />
    </Routes>
  );
};

export default App;
