import { useContext } from "react";
import Logo from "../images/logo.svg"
import { DataContext } from "../context";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const {showMenu,setIsVisible,setShow}=useContext(DataContext)
 
  return (
    <nav>
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>
        <div className="links">
            <button onMouseOver={showMenu} onMouseOut={()=>setIsVisible(false)}>Products</button>
            <button onMouseOver={showMenu} onMouseOut={()=>setIsVisible(false)}>Developers</button>
            <button onMouseOver={showMenu} onMouseOut={()=>setIsVisible(false)}>Company</button>
        </div>
        <div className="sign">
            <button>Sign In</button>
        </div>
        <button className="hamburger" onClick={()=>setShow(true)}>
          <FaBars/>
        </button>
    </nav>
  )
}

export default Navbar