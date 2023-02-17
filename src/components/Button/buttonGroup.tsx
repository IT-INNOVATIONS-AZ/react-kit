import React, {FC} from "react";
import cn from "clsx"
import './button.style.scss'
interface ButtonGroupProps{
    type: "icon"|"large"|"justified";
    icons:any;
}
 const ButtonGroup:FC<ButtonGroupProps> = ({type,icons})=>{
    return (
        <div className={cn("btn-group",{
           [ `btn-group-${type}`]:type,
        })}>
         {icons}
        </div>
    )
}

export default ButtonGroup;