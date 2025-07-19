import { useParams } from "react-router-dom";
import ProjectItem from "../listItems/ProjectItem";
import ProjectDescriptions from "../ProjectDescriptions";

export default function Projects({}) {

    const {id} = useParams();

    return (
        <section className="flex md:flex-row flex-col mt-8 justify-around items-center pb-5">
            <section className="grid xl:grid-cols-2 grid-cols-1 w-full p-5 gap-7 items-stretch">
                <ProjectItem title="solitaire"/>
                <ProjectItem/>
            </section>
            <section className="w-[100%] flex flex-col items-center lg:mt-0 mt-5">
                {<h1 className="text-white font-bold text-4xl my-3">{ProjectDescriptions[id] ? id !="none" && id : 404}</h1>}
                {ProjectDescriptions[id]?.subtitle || <h1 className="text-white font-bold text-2xl">Project not found</h1>}
            </section>
        </section>
    )
}