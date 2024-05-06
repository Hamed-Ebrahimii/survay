"use client";
import { Survay } from "@/types/survay";
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
export interface InitialState  {
    state: Survay[],
    setState:  Dispatch<SetStateAction<Survay[]>>,
  };
export const Context = createContext({});
const ContextProvider = ({ children , survey }: { children: ReactNode , survey : Survay[] }) => {
  const [surveys, setSurveys] = useState<Survay[]>(survey);
  const initialState = {
    state: surveys,
    setState: setSurveys,
  };
  useEffect(()=>{
    console.log(surveys);
    
  } , [surveys])
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
export default ContextProvider;
