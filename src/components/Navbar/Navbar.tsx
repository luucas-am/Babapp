import Dropdown from "../Dropdown/Dropdown"
import "./Navbar.css"

const Navbar = () => {

  return (
    <div id='navbar'>
        <div className='logo'>
          <h2 className='logo-header'>Babapp</h2>
        </div>
        <Dropdown />
    </div>
  )
}

export default Navbar