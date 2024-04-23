import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <nav className=' max-w-7xl flex justify-between mx-auto'>
            <img src={Logo} alt="" />
            <div className='space-x-20'>
               <NavLink to={'/'}>Home</NavLink>
               <NavLink to={'/donation'}>Donation</NavLink>
               <NavLink to={'/statistics'}>Statistics</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;