import LeftColumn from "./busPageContents/LeftColumn"
import RightColumn from "./busPageContents/RightColumn"
import Footer from "./Footer"

const BusinessPage = () => {
    return(
        <div className="mainComponents">
            <div className="p-4 mx-10 flex space-x-4 w-4/5 flex justify-center h-screen">
                <LeftColumn />
                <RightColumn />
            </div>
            <Footer />
        </div>
    )
}
export default BusinessPage