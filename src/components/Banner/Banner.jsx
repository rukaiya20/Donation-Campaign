import Home from '../Home/Home';
import backgroundImage from '../../assets/Banner.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="hero bannerImg" >
  <div className="bannerOverlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="banner-text">I Grow By Helping People In Need</h1>
      <p className="mb-5 banner-text flex mt-10 ml-10">
      <input type="text" placeholder="Search here" className="input w-full max-w-md relative"  />
      <button className="btn btnInp absolute "> Search </button>
      </p>
      
    </div>
  </div>
</div>
    );
};

export default Banner;