
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function IconListItem({icon, text}) {
    return (
        <section className="flex flex-col lg:flex-row items-center gap-5 justify-start bg-zinc-800 rounded-xl p-4 w-full transition-all duration-75 ease-in-out hover:shadow-white/50 hover:scale-105 shadow-lg">
            <FontAwesomeIcon icon={icon} className='text-red-800 mr-4 text-2xl'/>
            <span className="text-white font-bold text-2xl">{text}</span>
        </section>
    )
}