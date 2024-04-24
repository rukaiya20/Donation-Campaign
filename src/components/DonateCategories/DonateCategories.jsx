import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";

const DonateCategories = () => {

    const [donations,setDonations] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:p-4 md:mx-28 mx-4">
            {
                donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
            }
        </div>
    );
};

export default DonateCategories;