"use client";
import React, { createContext, Dispatch, useContext, useReducer } from "react";

export type User = {
  accessToken: string;
  sessionId: string;
  myList?: string[];
};

type Action =
  | { type: "GET_MY_LIST"; id: string }
  | { type: "SIGN_IN"; data: { accessToken: string; sessionId: string } };

export const UserContext = createContext<User | null>(null);

type UserDispatch = Dispatch<Action>;
export const UserDispatchContext = createContext<UserDispatch | null>(null);

function userReducer(state: User, action: Action): User {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        accessToken: action.data.accessToken,
        sessionId: action.data.sessionId,
      };
    case "GET_MY_LIST":
      //TODO: 수정
      return {
        ...state,
        myList: [action.id],
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //TODO: initialState 값 지우기
  const [user, dispatch] = useReducer(userReducer, {
    accessToken: "",
    sessionId: "2bc5adb67cde82f05b5cc514f01dd01b6a41954e",
    myList: [""],
  });
  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </UserDispatchContext.Provider>
  );
}

export function useUserState() {
  const state = useContext(UserContext);
  if (!state) throw new Error("User Provider not found");
  return state;
}
export function useUserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error("Dispatch Provider not found");
  return dispatch;
}

export default UserContext;
