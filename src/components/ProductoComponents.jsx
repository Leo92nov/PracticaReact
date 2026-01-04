import { useState } from "react"

export default function ProductoComponent({fuente, titulo, precio}){

    const [contador, setContador,] = useState(0);
    const handleClick = () =>{
        setContador (contador + 1)
    }
    const handleMinus = () => {
        setContador (contador - 1)
    }

    

    return <>
    <div className="flex items-center w-[33%] flex-col flex-wrap mt-8" >
        <img  className="w-[300px] h-[300px]" src={fuente} alt="" />
        <h3>{titulo}</h3>
        <h3>$ {precio}</h3>
        <div className="flex gap-2 items-center bg-red-100">
            <button className="border rounded-md border-black-2 bg-blue-200 text-xl w-6 h-6 flex items-center justify-center pb-1 pr-0.5 cursor-pointer" onClick={handleMinus}>-</button>
            <p className="text-xl p-1">{contador}</p>
            <button className="border rounded-md border-black-2 bg-blue-200 text-xl w-6 h-6 flex items-center justify-center pb-1 pr-0.5 cursor-pointer" onClick={handleClick}>+</button>
        </div>
    </div>
    
    
    </>
}