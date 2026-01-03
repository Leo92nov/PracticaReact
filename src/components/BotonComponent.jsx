export default function BotonComponente({nombre}){

    const handleClick= () =>{
        console.log(`hiciste click en ${nombre}`);
        
    }

    return <button onClick={handleClick} className="bg-[#FFA1C7] text-white h-8 text-lg font-serif font-semibold rounded px-2 hover:bg-[#ED68A2] cursor-pointer">{nombre}</button>
}