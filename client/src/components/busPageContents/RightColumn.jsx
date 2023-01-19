
const RightColumn = ({business}) => {
    const GAPIkey = import.meta.env.VITE_API_KEY_GAPI
    const address = business.address 
    // console.log(address)
    // let formatedAddress
    // if (address.contains(',')) {
    //     formatedAddress = address.replace(/,/g, "").split(" ").join("+")
    // }

    return(
        <div id="right side column" className="flex-block w-1/4 break-all">
            <div>
                <img className="w-full rounded-md" src={`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn Bridge&zoom=12&size=400x400&key=${GAPIkey}`}></img>
            </div>
            <div className="mt-3 flex-col">
                <a href="https://www.google.com/maps/place/142+West+St,+New+York,+NY+10007/@40.7140108,-74.0152184,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a1be5ea0469:0xa75e6b3063b8d64f!8m2!3d40.7140108!4d-74.0130297" className="flex items-center pb-1 space-x-2">
                    <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/9077/9077975.png" />
                    <h1 className="break-all">{business.address}</h1>
                </a>
                <a href="https://www.rumbleboxinggym.com/" className="flex items-center pb-1 space-x-2">
                    <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" />
                    <h1 className="break-all">Website</h1>
                </a>
                <a href="https://www.instagram.com/doyourumble/" className="flex items-center pb-1 space-x-2">
                    <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/2111/2111491.png" />
                    <h1 className="break-all">Instagram</h1>
                </a>
                <a href="https://www.facebook.com/DoYouRumble" className="flex items-center pb-1 space-x-2">
                    <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/1077/1077041.png" />
                    <h1 className="break-all">Facebook</h1>
                </a>
                
            </div>
        </div>
    )
}
export default RightColumn