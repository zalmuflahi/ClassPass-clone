import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return(
        <div className = "headerContainer">
            <Link className="h-4/5 ratio-auto" to="/">
                    <img className='h-full' src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/Fergals/Case%20Study%20Logos/ClassPass%20Logo.png" />
                </Link>
            <div id="navLinks" >
                <Link className="links" to="/Login">Login</Link>
                <Link className="links" to="/BusinessPage">View Business</Link>
            </div>
        </div>
    )
}
export default Header