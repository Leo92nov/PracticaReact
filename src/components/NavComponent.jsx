import BotonComponente from "./BotonComponent";
import IconCartComponent from "./IconCartComponent";


export default function NavComponente(){

return <>
<nav className="w-[90%] mx-auto flex justify-between items-center bg-blue-500 m-2">
    <BotonComponente nombre='Productos'></BotonComponente>
    <BotonComponente nombre='Contacto'></BotonComponente>
    <BotonComponente nombre='Sobre Nosotros'></BotonComponente>
    <IconCartComponent fuente="../../Media/imgs/iconCart.png" className="bg-blue-300 w-[100px] h-[100px]"></IconCartComponent>
</nav>
</>
}