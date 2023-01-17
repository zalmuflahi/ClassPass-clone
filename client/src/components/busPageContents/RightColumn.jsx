const RightColumn = () => {
    const GAPIkey = import.meta.env.GOOGLE_API_KEY

    return(
        <div id="right side column" className="flex-block w-1/4 break-all">
            <img className="w-full" src="https://i.insider.com/5c1bd9ea630d9b259d4df48c?width=1000&format=jpeg&auto=webp"></img>
            
            <div>
                <iframe
                    className="w-full"
                    style={{border:0}}
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${GAPIkey}&q=Space+Needle,Seattle+WA`}>
                </iframe>
                
            </div>
            <h1 className="break-all w-full">FILLERe ofhweofh wehf wio ehfo wieofhow iehfwie ofhwiehfowe ihofihweoifhowiehfoiwheoifhwoeifhowiehfihwef</h1>
        </div>
    )
}
export default RightColumn