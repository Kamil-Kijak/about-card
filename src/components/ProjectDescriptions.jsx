import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TextListItem from "./listItems/TextListItem";

import { useLanguagesStore } from "./hooks/useLanguagesStore";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";



export default function ProjectDescriptions() {
    const getTextByKey = useLanguagesStore((state) => state.getTextByKey);

    return {
        "none":{
            subtitle:<h1 className="text-white font-bold text-2xl text-center">{getTextByKey("view_details")}</h1>,
            desc:<></>
        },
        "solitaire":{
            type:<p className="bg-orange-700 p-2 rounded-lg font-bold text-white" aria-label="project type"><FontAwesomeIcon icon={faGamepad}/> Game</p>,
            subtitle:<h1 className="text-white font-bold text-2xl text-center px-2" role="subtitle">{getTextByKey("solitaire_subtitle")}</h1>,
            desc:<>
                <h1 className="project-desc-h">{getTextByKey("sources")}</h1>
                <section className="flex lg:flex-row gap-4 justify-center" role="list" aria-label="project sources">
                    <a title="view project on github" target="_blank" href="https://github.com/Kamil-Kijak/console-solitaire" className="project-desc-button"><FontAwesomeIcon icon={faGithub}/> Github</a>
                </section>
                <h1 className="project-desc-h">{getTextByKey("short_desc")}</h1>
                <p className="project-desc-p">{getTextByKey("solitaire_short_desc")}</p>
                <h1 className="project-desc-h">{getTextByKey("technologies")}</h1>
                <section className="flex flex-col items-start text-white font-bold text-2xl gap-y-5 ml-4 px-1" role="list" aria-label="used technologies">
                    <TextListItem title={<p className="text-cyan-400">C#</p>} text={getTextByKey("solitaire_c#")}/>
                    <TextListItem title={<p className="text-cyan-400">.NET</p>} text={getTextByKey("solitaire_dotnet")}/>
                </section>
                <h1 className="project-desc-h">{getTextByKey("creation")}</h1>
                <p className="project-desc-p">{getTextByKey("solitaire_creation1")}</p>
                <p className="project-desc-p mt-4">{getTextByKey("solitaire_creation2")}</p>
                <p className="project-desc-p mt-4">{getTextByKey("solitaire_creation3")}</p>
                <cite className='text-zinc-400 text-xl my-8 text-center px-5'>''{getTextByKey("solitaire_cite")},,</cite>
            </>
        
        }
    }
}