import { CiText } from "react-icons/ci";
import { BsChatLeftTextFill } from "react-icons/bs";
import { IoIosCheckbox } from "react-icons/io";
import { MdOutlineAccessTime, MdOutlineRadioButtonChecked } from "react-icons/md";
import { FaSliders } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { RxDropdownMenu } from "react-icons/rx";

const SurvayIcon = ({index} : {index : number}) => {
    switch(index){
        case 0 : return <CiText />
        case 1 : return <BsChatLeftTextFill />
        case 2 : return <IoIosCheckbox />
        case 3 : return <MdOutlineRadioButtonChecked />
        case 4 : return <FaSliders />
        case 5 : return <SlCalender />
        case 6 : return <MdOutlineAccessTime />
        case 7 : return <RxDropdownMenu />



    }
}
export default SurvayIcon