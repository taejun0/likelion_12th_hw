//App.jsx

import React from "react";
import UseStateCounter from "./components/UseStateCounter";
import ChangeName from "./components/ChangeName";
import UseEffectCounter from "./components/UseEffectCounter";
import UseEffectTimer from "./components/UseEffectTimer";
import TimerforSession from "./components/TimerforSession";
import "./App.css";

function App() {
  return (
    <>
      <UseStateCounter />
      <ChangeName />
      <UseEffectCounter />
      <UseEffectTimer />
      <TimerforSession />
    </>
  );
}

export default App;