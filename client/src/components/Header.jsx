import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className = "headerContainer">
            <img className="h-4/5 ratio-auto float-left" src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/Fergals/Case%20Study%20Logos/ClassPass%20Logo.png" />
            <div id="navLinks" className="float-right" >
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/Login">Login</Link>
                <Link className="links" to="/BusinessPage">View Business</Link>
            </div>
        </div>
    )
}
export default Header