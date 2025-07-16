
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function IconListItem({icon, text}) {
    return (
        <section className="flex items-center">
            <FontAwesomeIcon icon={icon} className='text-cyan-400 mr-4'/>
            <span>{text}</span>
        </section>
    )
}