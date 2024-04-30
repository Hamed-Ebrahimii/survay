import { Button } from "@mui/material";

interface Iprops {
  id: number;
  answer: string;
  handleClick : (value : number) => void
}
const Btn = ({answer , id , handleClick} : Iprops) => {
    return(
        <Button style={
            {
                fontFamily : 'yekan'
            }
        } type="button" variant="contained" color="info" className="w-full border border-slate-200 rounded-lg py-3 px-5 text-white font-medium text-lg" onClick={()=> handleClick(id)}>
                {answer}
        </Button>
    )
    
};
export default Btn
