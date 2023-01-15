import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className = "headerContainer">
            <Link  className="links" to="/">HOME</Link>
            <Link className="links" to="/Login">LOGIN</Link>
            <Link className="links" to="/BusinessPage">BUSINESS</Link>
        </div>
    )
}
export default Header