import LeftColumn from "./busPageContents/LeftColumn"
import RightColumn from "./busPageContents/RightColumn"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const BusinessPage = () => {
    const [business, setBusiness] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const request = async () => {
            let req = await fetch(`http://127.0.0.1:3000/business/${id}`);
            let res = await req.json();
            setBusiness(res);
        }
        request();
    }, []);

    return (
        <div className="mainComponents">
            <div className="pt-4 pr-4 pl-4 pb-50 mb-200 mx-10 flex space-x-4 w-4/5 flex justify-center h-screen">
                <LeftColumn business={business} />
                <RightColumn business={business} />
            </div>
        </div>
    )
}
export default BusinessPage