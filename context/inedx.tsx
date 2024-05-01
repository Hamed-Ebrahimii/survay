"use client";

import { Answers } from "@/types/answers";
import { Survay } from "@/types/survay";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
export interface InitialState  {
    state: Answers[],
    setState:  Dispatch<SetStateAction<Answers[]>>,
  };
export const Context = createContext({});
const ContextProvider = ({ children , survey }: { children: ReactNode , survey : Survay[] }) => {
  const [surveys, setSurveys] = useState<Survay[]>(survey);
  const initialState = {
    state: surveys,
    setState: setSurveys,
  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
export default ContextProvider;
