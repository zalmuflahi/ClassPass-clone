import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className = "headerContainer">
            <div id="navLinks">

                <Link  className="links" to="/">Home</Link>
                <Link className="links" to="/Login">Login</Link>
                <Link className="links" to="/BusinessPage">View Business</Link>
            </div>
        </div>
    )
}
export default Header