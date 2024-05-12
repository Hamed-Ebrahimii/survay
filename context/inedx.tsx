"use client";
import { Survay } from "@/types/survay";
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
export interface InitialState  {
    state: Survay[],
    setState:  Dispatch<SetStateAction<Survay[]>>,
  };
export const ContextSurvey = createContext<InitialState>({
  setState: () => {},
  state: []
});
const ContextProvider = ({ children , survey }: { children: ReactNode , survey : Survay[] }) => {
  const [surveys, setSurveys] = useState<Survay[]>(survey);
  const initialState = {
    state: surveys,
    setState: setSurveys,
  };

  return <ContextSurvey.Provider value={initialState}>{children}</ContextSurvey.Provider>;
};
export default ContextProvider;
