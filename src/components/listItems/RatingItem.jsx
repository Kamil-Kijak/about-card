import { faMedal, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function RatingItem({title, starsCount = 1, certificateLink}) {

    const stars = new Array(5).fill(null);
    return (
        <section className="flex items-center">
            <section className="mr-6" role="title">
                {title}
            </section>
            <span className="flex gap-x-1" role="list" aria-label="stars count">
                {
                    stars.map((obj, index) =>
                        {
                            if(starsCount>0) {
                                starsCount--;
                                return <FontAwesomeIcon icon={faStar} className="text-yellow-400" key={index}/>
                            } else {
                                return <FontAwesomeIcon icon={faStar} className="text-yellow-800" key={index}/>
                            }
                        }
                    )
                }
            </span>
            {
                certificateLink &&
                <span className="ml-3" aria-label="certificate link">
                    <a href={certificateLink} title="Ceritificate" target="_blank"><FontAwesomeIcon icon={faMedal} className="cursor-pointer hover:text-yellow-400 hover:scale-125 transition-all duration-150 ease-in-out"/></a>
                </span>
            }
        </section>
    )
}