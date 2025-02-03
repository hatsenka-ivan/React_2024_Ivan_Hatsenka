import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigator = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    setPassword(""); //hatsenka.ivan@student.ehu.lt
    setUsername(""); //123456
    signInWithEmailAndPassword(auth, username, password)
      .then(() => {
        navigator("/");
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error(error.code, error.message);
        alert("You seem to be logged out. Silly you. Login is hatsenka.ivan@student.ehu.lt. Password is 123456. Very simple if you ask me.");
      });
  }

  function handleCancel(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    setUsername("");
    setPassword("");
  }

  return (
    <>
      <h1 className="main__heading">Log in</h1>
      <section className="login-block-wrapper">
        <form className="login-block">
          <label htmlFor="username">
            User name
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              name="username"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
            />
          </label>
          <span>
            <Button onClick={handleSubmit} text="Submit" primary={true} />
            <Button onClick={handleCancel} text="Cancel" primary={false} />
          </span>
        </form>
      </section>
    </>
  );
}

export default Login;
