
import { useNavigate } from "react-router-dom";

export default function ProjectItem({img, title = "project", typeDescription = <>something</>, colorClass = "bg-cyan-400"}) {
    const navigate = useNavigate();
    return (
        <section className="bg-zinc-800 shadow-lg hover:shadow-white/50 w-full cursor-pointer flex flex-col md:flex-row justify-center md:items-start items-center p-7 rounded-2xl gap-5 transition-all duration-75 ease-in-out hover:scale-105" onClick={() => navigate(`/projects/${title}`)} role="button" aria-label="show this project">
            <img src={img} alt={title + " image"} className="rounded-2xl w-[150px] h-[100px]"/>
            <section className="flex-1/2 flex flex-col justify-start gap-y-3 md:items-start items-center">
                <p className={`${colorClass} p-2 rounded-lg cursor-pointer font-bold text-white`} aria-label="project type">{typeDescription}</p>
                <h1 className="text-white font-extrabold text-2xl text-center">{title}</h1>
            </section>
        </section>
    )
}