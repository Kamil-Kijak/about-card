
import {faLightbulb, faMagnifyingGlass, faPen, faUser, faUsers, faHandshakeSimple, faHandHoldingHand, faGear} from "@fortawesome/free-solid-svg-icons"
import IconListItem from '../listItems/IconListItem';
import TextListItem from "../listItems/TextListItem";
import PageTitle from "../PageTitle";

export default function Skills({}) {
    return (
        <section className="flex mt-8 justify-center items-start min-h-full pb-5">
            <PageTitle title={"Skills - Kamil Kijak"}/>
            <section className="flex justify-around w-full mt-10 lg:flex-row flex-col gap-y-10">
                <section className="flex-1/3 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">Technical</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-5 ml-4">
                        <TextListItem title={<p className="text-yellow-500">JS</p>} text={"node.js, react.js, express.js, vanilla"}/>
                        <TextListItem title={<p className="text-blue-700">TW</p>} text={"tailwind components stylizing"}/>
                        <TextListItem title={<p className="text-cyan-400">C#</p>} text={"xna(monogame), vanilla"}/>
                        <TextListItem title={<p className="text-purple-700">SQL</p>} text={"database creation, operation"}/>
                        
                    </section>
                </section>
                <section className="flex-1/3 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">Practical</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-5">
                        <IconListItem icon={faGear} text={"Productive"}/>
                        <IconListItem icon={faPen} text={"Planning work"}/>
                        <IconListItem icon={faUser} text={"Individual work"}/>
                        <IconListItem icon={faMagnifyingGlass} text={"Finding solutions"}/>
                        <IconListItem icon={faLightbulb} text={"Create own ideas"}/>
                    </section>
                </section>
                <section className="flex-1/3 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-cyan-400">Social</h1>
                    <section className="flex flex-col items-start text-white font-bold mt-7 text-2xl gap-y-5">
                        <IconListItem icon={faUsers} text={"Teamwork"}/>
                        <IconListItem icon={faHandshakeSimple} text={"Communicativeness"}/>
                        <IconListItem icon={faHandHoldingHand} text={"Helpful"}/>
                        <IconListItem icon={faUsers} text={"Empathy"}/>
                    </section>
                </section>
            </section>
        </section>
    )
}