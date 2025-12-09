
import {faLightbulb, faMagnifyingGlass, faPen, faUser, faUsers, faHandshakeSimple, faHandHoldingHand, faGear, faBrain, faPaintBrush} from "@fortawesome/free-solid-svg-icons"
import IconListItem from '../listItems/IconListItem';
import PageTitle from "../PageTitle";
import { useLanguagesStore } from "../hooks/useLanguagesStore";
import TechnologyItem from "../listItems/TechnologyItem";

export default function Skills({}) {
    const getTextByKey = useLanguagesStore((state) => state.getTextByKey);
    return (
        <section className="flex mt-8 justify-center items-start min-h-full pb-5">
            <PageTitle title={"Skills - Kamil Kijak"}/>
            <section className="flex justify-around w-full mt-10 lg:flex-row flex-col gap-y-10">
                <section className="flex-1/2 flex flex-col items-center xl:m-10 m-0">
                    <h1 className="text-4xl font-bold text-cyan-400 text-center">{getTextByKey("technical")}</h1>
                    <section className="flex flex-col items-start gap-y-5 p-5 overflow-auto scrollbar h-full xl:h-[800px] w-full mt-7" role="list" aria-label="technical skills">
                        <TechnologyItem title="HTML" barColor="bg-orange-700" textColor="text-orange-700"/>
                        <TechnologyItem title="CSS" barColor="bg-blue-300" textColor="text-blue-300"/>
                        <TechnologyItem title="JS" barColor="bg-yellow-500" textColor="text-yellow-500" certificateLink="https://www.hackerrank.com/certificates/iframe/e99430532e02"/>
                        <TechnologyItem title="React.js" barColor="bg-cyan-600" textColor="text-cyan-600" certificateLink="https://www.hackerrank.com/certificates/iframe/a13c4fcb3949"/>
                        <TechnologyItem title="Tailwind" barColor="bg-blue-700" textColor="text-blue-700"/>
                        <TechnologyItem title="Node.js" barColor="bg-green-600" textColor="text-green-600"/>
                        <TechnologyItem title="PHP" barColor="bg-purple-600" textColor="text-purple-600"/>
                        <TechnologyItem title="MySQL" barColor="bg-amber-700" textColor="text-amber-700" certificateLink="https://www.hackerrank.com/certificates/iframe/c5c7bd9be617"/>
                        <TechnologyItem title="C#" barColor="bg-cyan-400" textColor="text-cyan-400" certificateLink="https://www.hackerrank.com/certificates/iframe/c5c7bd9be617"/>
                        <TechnologyItem title="Python" barColor="bg-yellow-500" textColor="text-yellow-500"/>
                        <TechnologyItem title="Git" barColor="bg-pink-800" textColor="text-pink-800"/>
                    </section>
                </section>
                <section className="flex-1/2 flex flex-col items-center xl:m-10 m-0">
                    <h1 className="text-4xl font-bold text-cyan-400 text-center">{getTextByKey("soft")}</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-5 ml-4 px-5 py-2 overflow-auto scrollbar h-full lg:h-[800px]" role="list" aria-label="practical skills">
                        <IconListItem icon={faGear} text={getTextByKey("productive")}/>
                        <IconListItem icon={faBrain} text={getTextByKey("logical_thinking")}/>
                        <IconListItem icon={faPen} text={getTextByKey("planning_work")}/>
                        <IconListItem icon={faUser} text={getTextByKey("individual_work")}/>
                        <IconListItem icon={faUsers} text={getTextByKey("teamwork")}/>
                        <IconListItem icon={faMagnifyingGlass} text={getTextByKey("finding_solutions")}/>
                        <IconListItem icon={faLightbulb} text={getTextByKey("creating_own_ideas")}/>
                    </section>
                </section>
            </section>
        </section>
    )
}