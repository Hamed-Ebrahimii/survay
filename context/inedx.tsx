"use client";

import { Answers } from "@/types/answers";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
export interface InitialState  {
    state: Answers[],
    setState:  Dispatch<SetStateAction<Answers[]>>,
  };
export const Context = createContext({});
const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [surveys, setSurveys] = useState<Answers[]>([]);
  const initialState = {
    state: surveys,
    setState: setSurveys,
  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
export default ContextProvider;
