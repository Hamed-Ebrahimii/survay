import { useClickOutside } from "@mantine/hooks"
import { Box, Drawer } from "@mui/material"

const MenuEditSurvay = ({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) => {
    const ref = useClickOutside(() => setOpen(false))
    return (
        <Drawer anchor="left" open={open}>
            <Box ref={ref} sx={{
                width: '250px',
                backgroundColor: 'white'
            }}>
                    
            </Box>
        </Drawer>
    )
}
export default MenuEditSurvay