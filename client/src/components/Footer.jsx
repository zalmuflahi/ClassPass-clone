import * as React from "react";
import {Link} from "react-router-dom"

const Footer = ( { router } ) => {
    // const router = router
    return(
        <div className="footerContainer" >
            <Link to="/">HOME</Link>
            <Link to="/Login">LOGIN</Link>
            <Link to="/BusinessPage">BUSINESS</Link>
        </div>
    )
}
export default Footer