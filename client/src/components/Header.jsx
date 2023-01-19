import { Link, useNavigate } from "react-router-dom"
import { GoogleLogout } from 'react-google-login';


const Header = ({userObj, setUserObj, credits, setCredits}) => {
    const clientId = import.meta.env.VITE_API_G_CLIENT_ID
    const navigate = useNavigate()

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
                {userObj ? <div className="px-2"><div className="text-black font-bold font-xl">Welcome, {userObj.givenName} </div></div> : null}
                {userObj ? <div className="px-2"><div className="bg-blue-600 font-semibold rounded-full py-2 px-3">{credits} Credits</div></div> : null}
                {userObj ? <div className="pr-4 pl-2"><GoogleLogout  clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} /></div> : <Link className="links" to="/Login">Login</Link> }
            </div>
        </div>
    )
}
export default Header