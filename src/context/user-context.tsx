"use client";
import React, { createContext, Dispatch, useContext, useReducer } from "react";

export type User = {
  accessToken: string;
  sessionId: string;
  myList?: { movies: number[]; tv: number[] };
};

type Action =
  | { type: "REMOVE_MYLIST"; id: number; mediaType: string }
  | { type: "ADD_MYLIST"; id: number; mediaType: string }
  | {
      type: "SIGN_IN";
      data: {
        accessToken: string;
        sessionId: string;
        myList: { movies: number[]; tv: number[] };
      };
    };

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
        myList: action.data.myList,
      };
    case "ADD_MYLIST":
      if (action.mediaType === "movie") {
        return {
          ...state,
          myList: {
            ...state.myList,
            movies: state.myList?.movies.concat(action.id),
          },
        };
      }
      if (action.mediaType === "tv") {
        return {
          ...state,
          myList: { ...state.myList, tv: state.myList?.tv.concat(action.id) },
        };
      }
      return state;
    case "REMOVE_MYLIST":
      if (action.mediaType === "tv") {
        const nextTv = state.myList?.tv.filter((tv) => tv !== action.id);
        return { ...state, myList: { ...state.myList, tv: nextTv } };
      }
      if (action.mediaType === "movie") {
        const nextMovies = state.myList?.movies.filter(
          (movie) => movie !== action.id,
        );
        return { ...state, myList: { ...state.myList, movies: nextMovies } };
      }
      return state;
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
    myList: { tv: [], movies: [] },
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
