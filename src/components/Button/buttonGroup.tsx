import React, {FC} from "react";
import cn from "clsx"
import './button.style.scss'
import {useState} from "react"
interface ButtonGroupProps{
    type: "icon"|"large"|"justified";
    icons:any[];
    
}

 const ButtonGroup:FC<ButtonGroupProps> = ({type,icons,})=>{
    const [selected, setSelected] = useState(0)
    return (
        <div className={cn("btn-group",{
           [ `btn-group-${type}`]:type,
        })}>
          {icons?.map((Item,index) =>(
               <button key={index} 
               onClick={()=> setSelected(index)}
               className={selected === index ? "btn-group-icon-active":""} >
                 <Item.icon/>
               </button>
            ))}
        </div>
    )
}

export default ButtonGroup;