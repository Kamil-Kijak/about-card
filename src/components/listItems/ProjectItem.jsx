import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function ProjectItem({img, title = "project"}) {
    const navigate = useNavigate();
    return (
        <section className="bg-zinc-800 w-full h-[200px] rounded-2xl cursor-pointer relative overflow-hidden" onClick={() => navigate(`/projects/${title}`)}>
            {
                img ? <img src={img} className="absolute w-full h-full" /> : <section className="flex justify-center items-center h-full"><h1 className="text-white font-bold text-2xl text-center">No Image</h1></section>
            }
            <section className="absolute bg-black/25 opacity-0 hover:opacity-100 z-5 top-0 right-0 bottom-0 left-0 transition-opacity duration-200 ease-in-out flex flex-col justify-center items-center">
                <p className="mb-10 font-bold text-white text-xl text-center w-[80%] break-words">{title}</p>
                <button className="bg-cyan-400 p-1 w-[50px] h-[50px] rounded-xl cursor-pointer"><FontAwesomeIcon icon={faEye} className="text-white"/></button>
            </section>
        </section>
    )
}