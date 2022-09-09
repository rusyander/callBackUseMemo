import { useCallback, useMemo, useState } from "react";
import UseCalback from "./useCalback";

function createUser(name: string, surname: string) {
  const user = { name, surname };
  console.log(user);
  return user;
}

function App() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [counter, setCounter] = useState(0);

  const user = useMemo(() => {
    createUser(name, surName);
  }, [name, surName]);

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleSurNameChange = (e: any) => {
    setSurName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, surName);
  };

  const incFunc = useCallback(() => {
    setCounter((c) => c + 1);
    console.log(counter);
  }, [counter]);

  const dicFunc = useCallback(() => {
    setCounter((c) => c - 1);
    console.log(counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>usMeme</h1>

      <form action="submit" onClick={handleSubmit}>
        <input type="text" onChange={handleNameChange} value={name} />
        <br />
        <br />
        <input type="text" onChange={handleSurNameChange} value={surName} />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>

      <div>{JSON.stringify(user)}</div>

      <br />
      <br />
      <h2>{counter}</h2>
      <button onClick={incFunc}>inc</button>
      <button onClick={dicFunc}>dic</button>

      <br />
      <br />
      <h1>USE COLBACK</h1>
      <UseCalback />
    </div>
  );
}

export default App;
