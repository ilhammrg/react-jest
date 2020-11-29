import React, { useEffect, useState } from "react";
import Child from './components/child/Child';

const App = () => {
  const [user, setUser] = useState("");

  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    setUser(data.name);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Hello world!</h1>
      <Child />
      <p>{user}</p>
    </>
  );
};

export default App;
