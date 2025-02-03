import { useState } from "react";
import Button from "../../components/Button/Button";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login({ handleAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setPassword(""); //hatsenka.ivan@student.ehu.lt
    setUsername(""); //123456
    signInWithEmailAndPassword(auth, username, password)
      .then(() => {
        handleAuth();
        navigator("/");
      })
      .catch((error) => {
        console.log(error.code, error.message);
        alert("A newcomer, huh?");
      });
  }

  function handleCancel(e) {
    e.preventDefault();
    setUsername("");
    setPassword("");
  }

  return (
    <>
      <h1 className="main__heading">Log in</h1>
      <section className="login-block-wrapper">
        <form className="login-block" action="">
          <label htmlFor="username">
            User name
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
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
              id="password"
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
