import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/Auth";
import Input from "./../components/input/Input";

function Login() {
  let naviggate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();

    const userInput = {
      email,
      password,
    };

    const user = auth(userInput);
    if (!user.length) {
      setEmail('');
      setPassword('');
      throw new Error("User not found!");
    }

    naviggate('/dashboard')
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

export default Login;
