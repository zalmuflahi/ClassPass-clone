import * as React from "react";
import {Link} from "react-router-dom"

const Footer = ( { router } ) => {
    // const router = router
    return(
        <div className="footerContainer" >
            <Link to="/BusinessPage">HOME</Link>
        </div>
    )
}
export default Footer