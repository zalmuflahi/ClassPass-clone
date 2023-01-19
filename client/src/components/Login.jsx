import { gapi } from 'gapi-script';
import { GoogleLogin } from 'react-google-login';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = ({ userObj, setUserObj }) => {
    const navigate = useNavigate()
    const clientId = import.meta.env.VITE_API_G_CLIENT_ID

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = async (res) => {
        console.log('success:', res);
        setUserObj(res.profileObj);
        console.log(res)
        navigate("/")
        console.log(res.profileObj.imageUrl)
    }
    const onFailure = (err) => {
        console.log('failed:', err);
    };

    return (
        <div className="mainComponents">
            <div className="loginContainer">
                <div className=" align-middle bg-white drop-shadow-md hover:drop-shadow-xl transition ease-in-out h-2/3 aspect-[4/5] rounded-lg flex items-center justify-center">
                    <div className="flex-col flex items-center justify-center  space-y-4  mx-10">
                        <h1 className="font-black text-4xl text-center">One app for all things fitness, wellness & beauty</h1>
                        <p className="text-center" >ClassPass gives you worldwide access to thousands of top-rated gyms, fitness studios, salons and spas.</p>
                        <bl></bl>
                        <div className="px-2"><div className="bg-blue-600 text-center text-white font-semibold rounded-full py-2 px-5" onClick={() => navigate('/signup')}>Sign up for<br></br>200 Free Credits!</div></div>
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Sign in with Google"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        />
                        <bl></bl>
                        <p className="text-center text-sm">*This app is only for aspiring influencers with commitment problems and people that pay $300 for haircuts. No poors.*</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login