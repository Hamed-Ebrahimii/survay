"use server";
import { getAllSurvay } from "@/api/getAllSurvay";
import BoxForm from "@/components/box";
import ContextProvider from "@/context/inedx";
import { MuiMaterial } from "@/provider/muiMaterial";
import QueryProvider from "@/provider/reactQuery";

export default async function Home() {
  const survays = await getAllSurvay();
  return (
    <div className="bg-art w-screen h-screen flex items-center justify-center px-5 bg-no-repeat bg-cover bg-right">
     
        <ContextProvider survey={survays.data}>
          <MuiMaterial>

          <BoxForm  />
          </MuiMaterial>
        </ContextProvider>
     
    </div>
  );
}
