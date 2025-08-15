import { useParams } from "react-router-dom";
import ProjectItem from "../listItems/ProjectItem";
import ProjectDescriptions from "../ProjectDescriptions";

import PageTitle from "../PageTitle";

import solitaireImg from "../../assets/projects/solitaireMain.png"
import { useLanguagesStore } from "../hooks/useLanguagesStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

export default function Projects({}) {

    const {id} = useParams();

    const getTextByKey = useLanguagesStore((state) => state.getTextByKey);

    const projectDescriptions = ProjectDescriptions();

    return (
        <section className="flex md:flex-row flex-col mt-8 justify-around items-center min-h-full flex-1">
            <PageTitle title={`${projectDescriptions[id] ? id !="none" ? id : "projects" : "project not found"} - Kamil Kijak`}/>
            <section className="grid xl:grid-cols-2 grid-cols-1 w-full sm:w-[75%] md:w-full p-5 gap-7 items-stretch md:h-[600px] overflow-auto scrollbar" aria-label="Project list" role="grid">
                <ProjectItem title="solitaire" img={solitaireImg} typeDescription={<><FontAwesomeIcon icon={faGamepad}/> Game</>} colorClass="bg-orange-700"/>
            </section>
            <section className=" w-full flex flex-col items-center lg:mt-0 overflow-y-auto md:h-[600px] h-full scrollbar self-start pt-20" role="description">
                {projectDescriptions[id] && (projectDescriptions[id].hasOwnProperty("type")) && projectDescriptions[id].type}
                {<h1 className="text-cyan-400 font-bold text-5xl mb-4 mt-4 text-center">{projectDescriptions[id] ? id !="none" ? id : getTextByKey("select") : 404}</h1>}
                {projectDescriptions[id]?.subtitle || <h1 className="text-white font-bold text-2xl text-center">{getTextByKey("project_not_found")}</h1>}
                {projectDescriptions[id] && (projectDescriptions[id].hasOwnProperty("desc") ? projectDescriptions[id].desc : <h1 className="text-white font-bold text-2xl my-5 text-center">{getTextByKey("no_desc")}</h1>)}
            </section>
        </section>
    )
}