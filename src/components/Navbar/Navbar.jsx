import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Navbar.css';
import { TiThMenuOutline } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from 'react';
const Navbar = () => {

    const [open,setOpen] = useState(false);

    return (<>
    
       <div className='flex md:justify-between items-center md:mt-12'>
          <div>
             <img className='w-44 md:ml-32 ml-4 md:mt-0 mt-2' src={Logo} alt="" />
          </div>
         <nav className='md:mr-32 ml-32'>       
           
           <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
                   {
                     open === false ?
                     <IoIosCloseCircle className='text-2xl'></IoIosCloseCircle> :
                     <TiThMenuOutline className='text-2xl'></TiThMenuOutline>
                   }
           </div>
            
            <ul className={`md:flex md:gap-10 duration-1000 absolute md:static
                   ${
                    open ? '-top-80' : 'top-11'
                   }    
                       `}>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/donation'}>Donation</NavLink></li>
                <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
            </ul>
         </nav>
       </div>

    </>
    );
};

export default Navbar;