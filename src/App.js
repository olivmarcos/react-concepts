import { useState } from "react";
import "./App.css";
import Input from "./components/input/Input";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    setEmail('');
    setPassword('');
  };

  return (
    <div className="App">
      <h3>Learning</h3>
      <form className="form" onSubmit={onSubmit}>
        <Input
          label="E-mail"
          type="text"
          placeholder='enter your e-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
