import { faMedal, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function RatingItem({title, starsCount = 1, certificateLink}) {

    const stars = new Array(5).fill(null);
    return (
        <section className="flex items-center">
            <section className="mr-6">
                {title}
            </section>
            <span className="flex gap-x-1">
                {
                    stars.map(() =>
                        {
                            if(starsCount>0) {
                                starsCount--;
                                return <FontAwesomeIcon icon={faStar} className="text-yellow-400"/>
                            } else {
                                return <FontAwesomeIcon icon={faStar} className="text-yellow-800"/>
                            }
                        }
                    )
                }
            </span>
            {
                certificateLink &&
                <span className="ml-3">
                    <a href={certificateLink} target="_blank"><FontAwesomeIcon icon={faMedal} className="cursor-pointer hover:text-yellow-400 transition-colors duration-150 ease-in-out"/></a>
                </span>
            }
        </section>
    )
}