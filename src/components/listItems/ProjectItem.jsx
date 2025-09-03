
import { useNavigate } from "react-router-dom";

export default function ProjectItem({img, title = "project", typeDescription = <>something</>, colorClass = "bg-cyan-400"}) {
    const navigate = useNavigate();
    return (
        <section title={`${title}`} className="bg-zinc-800 w-full h-[200px] rounded-2xl cursor-pointer relative overflow-hidden" onClick={() => navigate(`/projects/${title}`)} role="button" aria-label="show this project">
            {
                img ? <img src={img} className="absolute w-full h-full" aria-label="project image" /> : <section className="flex justify-center items-center h-full" aria-label="no image"><h1 className="text-white font-bold text-2xl text-center">No Image</h1></section>
            }
            <section className="absolute bg-black/50 opacity-0 hover:opacity-100 z-5 top-0 right-0 bottom-0 left-0 transition-opacity duration-200 ease-in-out flex flex-col justify-center items-center">
                <h1 className="mb-10 font-bold text-white text-2xl text-center w-[80%] break-words" aria-label="project title">{title}</h1>
                <p className={`${colorClass} p-2 rounded-lg cursor-pointer font-bold text-white`} aria-label="project type">{typeDescription}</p>
            </section>
        </section>
    )
}