
export default function ThingLink({href, desc = "", title, shadowColor = "shadow-purple-700", action = () => {}}) {
    return (
        <a href={href} onClick={action} target="_blank" className={`${shadowColor} shadow-md px-5 py-3 rounded-md cursor-pointer hover:scale-110 transition-transform duration-100 ease-in-out flex justify-start items-center gap-6 w-full`}>
            <h1 className="text-white font-bold text-3xl">{title}</h1>
            <p className="text-zinc-400 text-sm">{desc}</p>
        </a>
    )
}