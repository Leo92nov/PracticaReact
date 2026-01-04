import ProductoComponent from "./ProductoComponents";


export default function ProductosContenedor(){
    return <>
    <div className="flex flex-wrap">
    <ProductoComponent fuente="../../Media/imgs/3060.jpg"  titulo="Nvidia 3060 RTX" precio="600" cantidad="0"></ProductoComponent>
    <ProductoComponent fuente="../../Media/imgs/4060.png"  titulo="Nvidia 4060 RTX" precio="800" cantidad="0"></ProductoComponent>
    <ProductoComponent fuente="../../Media/imgs/5060.jpg"  titulo="Nvidia 5060 RTX" precio="900" cantidad="0"></ProductoComponent>
    <ProductoComponent fuente="../../Media/imgs/5060.jpg"  titulo="Nvidia 5060 RTX" precio="900" cantidad="0"></ProductoComponent>
    <ProductoComponent fuente="../../Media/imgs/5060.jpg"  titulo="Nvidia 5060 RTX" precio="900" cantidad="0"></ProductoComponent>
    <ProductoComponent fuente="../../Media/imgs/5060.jpg"  titulo="Nvidia 5060 RTX" precio="900" cantidad="0"></ProductoComponent>
    </div>
    </>
}