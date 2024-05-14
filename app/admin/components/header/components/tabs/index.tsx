import { ReactNode } from "react"

interface TabsProps {
    color : 'purple' | 'green' | 'blue',
    icon : ReactNode,
    text : string
}
const Tabs = ({color , icon , text} : TabsProps) =>{
        return (
            <div className="px-3 py-2 h-full flex items-center gap-2 hover:border-b-2 border-green-200 text-gray-600 text-lg font-medium transition-all space-y-2">
                    {icon}
                    {text}
            </div>
        )
}
export default Tabs