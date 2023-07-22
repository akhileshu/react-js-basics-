import React, { useState } from "react";
// for handling signin and signout
import { createUserWithEmailAndPassword ,signOut ,signInWithPopup} from "firebase/auth";
import { auth, googleProvider } from "../confing/firebase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    // console.log(auth?.currentUser?.photoURL)
    // console.log(auth?.currentUser?.email)
  async function signIn(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }
  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }
  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={signIn}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          type="text"
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        ></input>
        <button type="submit">login</button>
        <button onClick={logout}>logout</button>
        <button onClick={signInWithGoogle}>signInWithGoogle</button>
      </form>
    </div>
  );
}

export default Auth;
