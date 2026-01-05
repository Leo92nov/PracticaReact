export default function CardComponent({children, title}){
    return <>
        <article className="ml-24 border border-black-100 w-16 h-24 text-center">
            {children}
            <h3>{title}</h3>
        </article>
    </>
}