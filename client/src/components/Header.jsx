import { Link, useNavigate } from "react-router-dom"
import { GoogleLogout } from 'react-google-login';


const Header = ({userObj, setUserObj}) => {
    const clientId = import.meta.env.VITE_API_G_CLIENT_ID
    const navigate = useNavigate()
    // Add google logout button function
    const logOut = () => {
        setUserObj(null);
        navigate("/Login")
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    }


    return(
        <div className = "headerContainer">
            <Link className="h-4/5 ratio-auto" to="/">
                    <img className='h-full' src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/Fergals/Case%20Study%20Logos/ClassPass%20Logo.png" />
                </Link>
            <div className="flex items-center" >
                
                <Link className="links" to="/BusinessPage">View Business</Link>
                {userObj ? <div className="pr-2 pl-2"><GoogleLogout  clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} /></div> : <Link className="links" to="/Login">Login</Link> }
            </div>
        </div>
    )
}
export default Header