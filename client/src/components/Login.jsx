import { gapi } from 'gapi-script';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useEffect, useState } from 'react';

const Login = ({ userObj,setUserObj }) =>{

    const clientId = import.meta.env.VITE_API_G_CLIENT_ID
    const apiKey = import.meta.env.VITE_API_KEY_GAPI

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        console.log('success:', res);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };


    return(
        <div className="mainComponents">
            <div className="loginContainer">
                <div className=" align-middle bg-white w-1/2 h-1/2 rounded-lg flex items-center justify-center">
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                </div>
            </div>
        </div>
    )
}
export default Login