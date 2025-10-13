
export default function AchivementLink({href, title, desc, shadowColor = "shadow-purple-700"}) {
    return (
        <a href={href} target="_blank" aria-label="achivement reference" className={`${shadowColor} shadow-md px-5 py-3 rounded-md cursor-pointer hover:scale-110 transition-transform duration-100 ease-in-out`}>
            <h1 className="text-white font-bold text-lg">{title}</h1>
            <p className="text-zinc-400 text-sm">{desc}</p>
        </a>
    )
}