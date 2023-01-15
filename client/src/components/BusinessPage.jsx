
const BusinessPage = () => {
    return(
        <div className="mainComponents">
            <div className="p-4 mx-10 flex space-x-4 w-4/5 flex justify-center h-screen">
                <div id="left side column" className="flex-block w-1/2">
                    <div id="image container" className="aspect-[5/3] overflow-hidden rounded-md">
                        <img className=" hover:scale-105 transition ease-in-out" src="https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/psh7k9ugxtuvhviozoxw.jpg"></img>
                    </div>
                </div>
                <div id="right side column" className="flex-block w-1/4">
                    <img src="https://i.insider.com/5c1bd9ea630d9b259d4df48c?width=1000&format=jpeg&auto=webp"></img>
                </div>
            </div>
        </div>
    )
}
export default BusinessPage