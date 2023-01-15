
const RightColumn = () => {
    const GAPIkey = import.meta.env.VITE_API_KEY_GAPI

    
    return(
        <div id="right side column" className="flex-block w-1/4 break-all">
            
            <div>
                <img className="w-full rounded-md" src={`https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=${GAPIkey}`}></img>
            </div>
            <h1 className="break-all w-full">FILLERe ofhweofh wehf wio ehfo wieofhow iehfwie ofhwiehfowe ihofihweoifhowiehfoiwheoifhwoeifhowiehfihwef</h1>
        </div>
    )
}
export default RightColumn