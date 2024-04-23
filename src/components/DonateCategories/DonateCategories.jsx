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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mx-28">
            {
                donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
            }
        </div>
    );
};

export default DonateCategories;