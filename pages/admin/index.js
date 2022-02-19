/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

function index() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === process.env.PASSWORD) {
      setAuthenticated(true);
    } else {
      console.log("Wrong password");
    }
  };
  return (
    <>
      <h1>Admin Page</h1>
      {authenticated ? (
        <>
          <h2>You are authenticated</h2>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </>
  );
}

export default index;
