import { Link, useLocation } from "react-router-dom";


export default function NavButton({path, ariaLabel, text}) {

    const location = useLocation();
    return (
        <Link to={path}><button className={location.pathname == path ? "nav-active-button" : "nav-button"} aria-label={ariaLabel}>{text}</button></Link>
    )
}