import './Donation.css'

const Donation = ({donation}) => {

    const {id,img,title,categoryName,price,description,categoryName_bg,card_bg,text_color} = donation;

    const cardBg = {
        backgroundColor: card_bg,
      };
      const categoryBg = {
        backgroundColor: categoryName_bg,
      };
      const textColor = {
        color: text_color,
      };
    
      const btnBG = {
        backgroundColor: text_color,
      };

    return (
        <div className="">
            <div style={cardBg} className="rounded-lg">
  <figure><img className="w-full rounded-lg" src={img} alt="" /></figure>
  <div className="">
    <div style={categoryBg} className="w-24 text-center my-4 px-4 py-1 categoryText rounded-md mx-4">
         <h2 style={textColor}>{categoryName}</h2>
    </div>
    <p style={textColor} className="titleText p-2">{title}</p>
  </div>
</div>
        </div>
    );
};

export default Donation;