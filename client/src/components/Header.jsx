import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className = "headerContainer">
            <div id="navLinks" className="justify-end">
                <Link  className="links" to="/">HOME</Link>
                <Link className="links" to="/Login">LOGIN</Link>
                <Link className="links" to="/BusinessPage">BUSINESS</Link>
            </div>
        </div>
    )
}
export default Header