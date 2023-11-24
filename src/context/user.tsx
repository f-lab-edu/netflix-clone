"use client";
import { createContext, useState } from "react";

const UserContext = createContext({
  accessToken: null,
  sessionId: null,
  signIn: ({ accessToken, sessionId }) => {},
});

export function UserContextProvider(props) {
  const [user, setUser] = useState({ accessToken: null, sessionId: null });

  function signInHandler({ accessToken, sessionId }) {
    console.log("signInHandler 실행");
    setUser((prevState) => ({
      sessionId: sessionId,
      accessToken: accessToken,
    }));
    return "good";
  }
  const context = {
    accessToken: user.accessToken,
    sessionId: user.sessionId,
    signIn: signInHandler,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
