
import {faLightbulb, faMagnifyingGlass, faPen, faUser, faUsers, faHandshakeSimple, faHandHoldingHand, faGear} from "@fortawesome/free-solid-svg-icons"
import IconListItem from '../listItems/IconListItem';
import TextListItem from "../listItems/TextListItem";
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
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-5 ml-4 px-5 overflow-auto scrollbar h-full md:h-[500px]">
                        <RatingItem title={<p className="text-orange-700">HTML</p>} starsCount={5}/>
                        <RatingItem title={<p className="text-yellow-500">Java Script</p>} starsCount={4}/>
                        <RatingItem title={<p className="text-cyan-600">React.js</p>} starsCount={3}/>
                        <RatingItem title={<p className="text-green-600">Node.js</p>} starsCount={3}/>
                        <RatingItem title={<p className="text-purple-700">SQL</p>} starsCount={4}/>
                        <RatingItem title={<p className="text-blue-700">Tailwind</p>} starsCount={4}/>
                        <RatingItem title={<p className="text-cyan-400">C#</p>} starsCount={3}/>
                        <RatingItem title={<p className="text-yellow-500">Python</p>} starsCount={2}/>
                        
                    </section>
                </section>
                <section className="flex-1/3 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">{getTextByKey("practical")}</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-5 px-5 overflow-auto scrollbar h-full md:h-[500px]">
                        <IconListItem icon={faGear} text={getTextByKey("productive")}/>
                        <IconListItem icon={faPen} text={getTextByKey("planning_work")}/>
                        <IconListItem icon={faUser} text={getTextByKey("individual_work")}/>
                        <IconListItem icon={faMagnifyingGlass} text={getTextByKey("finding_solutions")}/>
                        <IconListItem icon={faLightbulb} text={getTextByKey("creating_own_ideas")}/>
                    </section>
                </section>
                <section className="flex-1/3 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">{getTextByKey("social")}</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-5 px-5 overflow-auto scrollbar h-full md:h-[500px]">
                        <IconListItem icon={faUsers} text={getTextByKey("teamwork")}/>
                        <IconListItem icon={faHandshakeSimple} text={getTextByKey("communicativeness")}/>
                        <IconListItem icon={faHandHoldingHand} text={getTextByKey("helpful")}/>
                        <IconListItem icon={faUsers} text={getTextByKey("empathy")}/>
                    </section>
                </section>
            </section>
        </section>
    )
}