import { TbBrush } from "react-icons/tb"
import Tabs from "./components/tabs"
import { SiTestcafe } from "react-icons/si"
import { FaShareAlt } from "react-icons/fa"

const Header = () =>{
    return(
        <header className="w-full py-4 px-3 bg-gray-100 shadow-md flex items-center justify-center gap-3">
                    <Tabs color="blue" icon={<TbBrush className="text-orange-200"/>} text="طراحی"/>
                    <Tabs color="blue" icon={<SiTestcafe className="text-blue-400" />} text="تست"/>
                    <Tabs color="blue" icon={<FaShareAlt className="text-blue-gray-400" />
} text="انتشار"/>
        </header>
    )
}
export default Header