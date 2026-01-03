import { useState } from "react"

export default function ProductoComponent({fuente, titulo, precio, cantidad}){

    const [contador, setContador] = useState(0);
    const handleClick = () =>{
        setContador (contador + 1)
    }

    const [restar, setRestar] = useState(0);
    const handleClick2 = () =>{
        setRestar (restar - 1)
    }


    return <>
    <div className="flex items-center w-[30%] flex-col" >
        <img  className="w-[500px] h-[500px]" src={fuente} alt="" />
        <h3>{titulo}</h3>
        <h3>{precio}</h3>
        <div>
            <button onClick={handleClick2}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleClick}>+</button>
        </div>
    </div>
    
    
    </>
}