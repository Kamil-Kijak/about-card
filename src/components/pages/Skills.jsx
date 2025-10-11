
import {faLightbulb, faMagnifyingGlass, faPen, faUser, faUsers, faHandshakeSimple, faHandHoldingHand, faGear, faBrain, faPaintBrush} from "@fortawesome/free-solid-svg-icons"
import IconListItem from '../listItems/IconListItem';
import PageTitle from "../PageTitle";
import { useLanguagesStore } from "../hooks/useLanguagesStore";
import RatingItem from "../listItems/RatingItem";

export default function Skills({}) {
    const getTextByKey = useLanguagesStore((state) => state.getTextByKey);
    return (
        <section className="flex mt-8 justify-center items-start min-h-full pb-5">
            <PageTitle title={"Skills - Kamil Kijak"}/>
            <section className="flex justify-around w-full mt-10 lg:flex-row flex-col gap-y-10">
                <section className="flex-1/3 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">{getTextByKey("technical")}</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-5 ml-4 px-5 py-2 overflow-auto scrollbar h-full md:h-[500px]" role="list" aria-label="technical skills">
                        <RatingItem title={<p className="shadow-orange-700 shadow-md py-2 px-3 rounded-lg font-bold text-white" aria-label="skill">HTML</p>} starsCount={5}/>
                        <RatingItem title={<p className="shadow-blue-300 shadow-md py-2 px-3 rounded-lg font-bold text-white" aria-label="skill">CSS</p>} starsCount={5}/>
                        <RatingItem title={<p className="shadow-yellow-500 shadow-md py-2 px-3 rounded-lg font-bold text-white" aria-label="skill">Java Script</p>} starsCount={4} certificateLink="https://www.hackerrank.com/certificates/iframe/e99430532e02"/>
                        <RatingItem title={<p className="shadow-cyan-600 shadow-md py-2 px-3 rounded-lg font-bold text-white" aria-label="skill">React.js</p>} starsCount={3} certificateLink="https://www.hackerrank.com/certificates/iframe/a13c4fcb3949"/>
                        <RatingItem title={<p className="shadow-blue-700 shadow-md py-2 px-3 rounded-lg font-bold text-white" aria-label="skill">Tailwind</p>} starsCount={4}/>
                        <RatingItem title={<p className="shadow-green-600 shadow-md py-2 px-3 rounded-lg font-bold text-white" aria-label="skill">Node.js</p>} starsCount={3}/>
                        <RatingItem title={<p className="shadow-purple-500 shadow-md py-2 px-3 rounded-lg font-bold text-white" aria-label="skill">PHP</p>} starsCount={2}/>
                        <RatingItem title={<p className="shadow-purple-700 shadow-md py-2 px-3 rounded-lg font-bold text-white" aria-label="skill">SQL</p>} starsCount={4} certificateLink="https://www.hackerrank.com/certificates/iframe/830273fd52ca"/>
                        <RatingItem title={<p className="shadow-cyan-400 shadow-md py-2 px-3 rounded-lg font-bold text-white" aria-label="skill">C#</p>} starsCount={3} certificateLink="https://www.hackerrank.com/certificates/iframe/c5c7bd9be617"/>
                        <RatingItem title={<p className="shadow-yellow-500 shadow-md py-2 px-3 rounded-lg font-bold text-white" aria-label="skill">Python</p>} starsCount={2}/>
                        <RatingItem title={<p className="shadow-pink-800 shadow-md py-2 px-3 rounded-lg font-bold text-white" aria-label="skill">Git</p>} starsCount={4}/>
                    </section>
                </section>
                <section className="flex-1/3 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">{getTextByKey("soft")}</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-5 px-5 overflow-auto scrollbar h-full md:h-[500px]" role="list" aria-label="practical skills">
                        <IconListItem icon={faGear} text={getTextByKey("productive")}/>
                        <IconListItem icon={faBrain} text={getTextByKey("logical_thinking")}/>
                        <IconListItem icon={faPen} text={getTextByKey("planning_work")}/>
                        <IconListItem icon={faUser} text={getTextByKey("individual_work")}/>
                        <IconListItem icon={faUsers} text={getTextByKey("teamwork")}/>
                        <IconListItem icon={faMagnifyingGlass} text={getTextByKey("finding_solutions")}/>
                        <IconListItem icon={faLightbulb} text={getTextByKey("creating_own_ideas")}/>
                    </section>
                </section>
                <section className="flex-1/3 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">{getTextByKey("certificates")}</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-5 px-5 overflow-auto scrollbar h-full md:h-[500px]" role="list" aria-label="social skills">
                        
                    </section>
                </section>
            </section>
        </section>
    )
}