import { useParams } from "react-router-dom";
import ProjectItem from "../listItems/ProjectItem";
import ProjectDescriptions from "../ProjectDescriptions";

import solitaireImg from "../../assets/projects/solitaireMain.png"

export default function Projects({}) {

    const {id} = useParams();

    return (
        <section className="flex md:flex-row flex-col mt-8 justify-around items-center min-h-full flex-1">
            <section className="grid xl:grid-cols-2 grid-cols-1 w-full sm:w-[75%] md:w-full p-5 gap-7 items-stretch md:h-[600px] overflow-auto scrollbar">
                <ProjectItem title="solitaire" img={solitaireImg}/>
            </section>
            <section className=" w-full flex flex-col items-center lg:mt-0 overflow-y-auto md:h-[600px] h-full scrollbar self-start">
                {<h1 className="text-cyan-400 font-bold text-5xl mb-4 mt-20">{ProjectDescriptions[id] ? id !="none" && id : 404}</h1>}
                {ProjectDescriptions[id]?.subtitle || <h1 className="text-white font-bold text-2xl">Project not found</h1>}
                {ProjectDescriptions[id] && (ProjectDescriptions[id].hasOwnProperty("desc") ? ProjectDescriptions[id].desc : <h1 className="text-white font-bold text-2xl my-5">No description</h1>)}
            </section>
        </section>
    )
}