import BotonComponente from "./BotonComponent";

export default function NavComponente(){



return <>
<nav className="w-[90%] mx-auto flex justify-between items-center bg-blue-500 m-2">
    <BotonComponente nombre='Productos'></BotonComponente>
    <BotonComponente nombre='Contacto'></BotonComponente>
    <BotonComponente nombre='Sobre Nosotros'></BotonComponente>
</nav>
</>
}