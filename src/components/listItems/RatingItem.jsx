import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function RatingItem({title, starsCount = 1}) {

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
        </section>
    )
}