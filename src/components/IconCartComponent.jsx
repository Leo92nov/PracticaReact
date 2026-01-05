export default function IconCartComponent({fuente, cantidad}){
    return <>
    <section>
        <img className="w-[60px] h-[60px] relative" src={fuente} alt="" />
        <p className="absolute top-2 right-24 w-[20px] h-[20px] rounded-full bg-pink-300 flex items-center justify-center text-white text-sm font-bold">{cantidad}</p>
    </section>
    </>

}