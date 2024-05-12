import { converTypeToPersian } from "@/tools/convertTypeToPersian"
import { Survay } from "@/types/survay"
import { useClickOutside } from "@mantine/hooks"
import { Input } from "@material-tailwind/react"
import { Box, Checkbox, Drawer, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material"
import IOSSwitch from "../switch/iosSwitch"
import { useState } from "react"
const typeFile = ['فایل', 'عکس', 'ویدیو', 'پی دی اف', 'همه']
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 4.5 + 8,
            width: 250,
        },
    },
};
const MenuEditSurvay = ({ open, setOpen, survay }: { open: boolean, setOpen: (value: boolean) => void, survay: Survay }) => {
    const ref = useClickOutside(() => setOpen(false))
    const [personName, setPersonName] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(

            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <Drawer anchor="left" open={open}>
            <Box sx={{
                width: '350px',
                backgroundColor: 'white',
                borderRadius: '30px'
            }}>
                <div className="w-full py-4 border-b px-2 ">
                    <p className="text-lg font-medium text-gray-700">
                        نوع سوال : {converTypeToPersian(survay.QuestionType)}
                    </p>
                </div>
                <div className="w-full py-4 border-b px-2 space-y-3 ">
                    <p className="text-lg font-medium text-gray-400 ">
                        متن سوال
                    </p>
                    <input type="text" className="py-1 px-3 rounded-lg outline-none bg-gray-100 border text-gray-400 w-full" placeholder="سوال خود را وارد کنید" />
                </div>
                <div className="w-full py-4 border-b px-2  flex items-center justify-between">
                    <p className="text-lg font-medium text-gray-400 ">
                        پاسخ دادن به سوال اجباری باشد ؟
                    </p>
                    <IOSSwitch />
                </div>
                <div className="w-full py-4 border-b px-2  flex items-center justify-between">
                    <p className="text-lg font-medium text-gray-400 ">
                        فایل ضمیمه داشته باشد ؟
                    </p>
                    <IOSSwitch />
                </div>
                <div className="w-full py-4 border-b px-2  flex items-center justify-between">
                    <p className="text-lg font-medium text-gray-400 ">
                        وارد کردن فایل ضمیمه اجباری باشد ؟
                    </p>
                    <IOSSwitch />
                </div>
                <div className="w-full py-4 border-b px-2  flex items-center justify-between">
                    <p className="text-lg font-medium text-gray-400 ">
                        تعداد فایل های ضمیمه را وارد کنید
                    </p>
                    <input type="number" className="outline-none border rounded-lg w-12" />
                </div>
                <div className="w-full py-4 border-b px-2  space-y-4">
                    <p className="text-lg font-medium text-gray-400 ">
                        نوع فایل ضمیمه چگونه باشد ؟
                    </p>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"

                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {typeFile.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox ripple checked={personName.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </Box>
        </Drawer>
    )
}
export default MenuEditSurvay