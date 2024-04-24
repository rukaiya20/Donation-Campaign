import { useLoaderData, useParams } from "react-router-dom";
import './DonationDetail.css'


const DonationDetailes = () => {
    // const donations = useLoaderData();
    // const {id} = useParams();
    // const IntId = parseInt(id);
    // const donation = donations.find(donation => donation.id === IntId);
    // const {img,title,categoryName,price,description,categoryName_bg,card_bg,text_color} = donation;

    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt)
    const {img,title,categoryName,price,description,categoryName_bg,card_bg,text_color} = donation;


    return (
        <div className="mt-24 max-w-6xl mx-auto">
            <div className="donateImg ">
                <div className="relative">
                <img className="w-full rounded-md " src={img} alt="" />
                <div className="donate-btn absolute">
                    <button className="donate-btn">Donate ${price}</button>
                </div>
                </div>
                
            </div>
            <h2 className="titel-text mt-12 mb-6">{title}</h2>
            <p className="description-text mb-32">{description}</p>
        </div>
    );
};

export default DonationDetailes;