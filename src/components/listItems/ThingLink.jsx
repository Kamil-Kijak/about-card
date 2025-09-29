
export default function ThingLink({href, title, shadowColor = "shadow-purple-700"}) {
    return (
        <a href={href} target="_blank" className={`${shadowColor} shadow-md px-5 py-3 rounded-md cursor-pointer hover:scale-110 transition-transform duration-100 ease-in-out`}>
            <h1 className="text-white font-bold">{title}</h1>
            <p className="text-zinc-400 text-sm">{href}</p>
        </a>
    )
}