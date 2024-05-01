import { Survay } from "@/types/survay"
import Button from "./components/btn"
import Btn from "./components/btn";
interface Iprops extends Survay {
    handleAnswer : (value : number) => void
}
const Form = ({answers , id , question , title , handleAnswer} : Iprops ) =>{
   
    return(
        <form className="w-full">
            <p className="text-xl font-medium text-white font-yekan">
                {question}
            </p>
          
            <div className="w-full grid grid-cols-1 gap-5 mt-12">
                {
                    answers?.map(item => <Btn key={item.id} answer={item.answer} id={String(item.id)} onClick={()=> handleAnswer(id)}/>)
                }
            </div>
        </form>
    )
}
export default Form