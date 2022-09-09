import React, { useCallback, useEffect, useState } from "react";

export default function UseCalback() {
  const [message, setMessage] = useState("Hello World");
  const [counter, setCounter] = useState(0);
  const greating = useCallback((messageStr: string) => {
    console.log(`hello ${messageStr}`);
  }, []);

  useEffect(() => {
    greating(message);
  }, [greating, message]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}
