"use client"
import { theme } from "@/theme";
import { ThemeProvider } from "@material-tailwind/react";
import { ReactNode } from "react";

export const MuiMaterial = ({children}: {children : ReactNode}) =>{
    return(
        <ThemeProvider value={theme}>
            <>
            {children}
            </>
        </ThemeProvider>
    )
}