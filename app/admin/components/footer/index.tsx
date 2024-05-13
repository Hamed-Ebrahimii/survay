import { Button } from "@material-tailwind/react"
import { FaList, FaPlus } from "react-icons/fa"
import { IoIosEye, IoIosSave } from "react-icons/io"

const Footer = () => {
    return (

        <footer className="w-full fixed bottom-0 py-4 px-3 bg-gray-100 shadow-md flex items-center justify-center gap-3">
                <Button color="amber" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className="text-xs flex flex-col items-center text-white">
                <FaPlus />
                     سوال
                </Button>
                <Button color="green" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className="text-xs flex flex-col items-center text-white">
                <IoIosSave />
                    ذخیره
                </Button>
                <Button color="blue-gray" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className="text-xs flex flex-col items-center text-white">
                <FaList />
                   لیست
                </Button>
                <Button color="light-blue" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className="text-xs flex flex-col items-center text-white">
                <IoIosEye />
                   نمایش
                </Button>
        </footer>

    )
}
export default Footer