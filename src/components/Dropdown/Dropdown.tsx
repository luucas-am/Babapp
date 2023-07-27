import "./Dropdown.css"
import MenuD from "../../assets/menu-d.png"
import MenuL from "../../assets/menu-l.png"
import Moon from '../../assets/moon.png'
import Sun from '../../assets/sun.png'
import { useState } from "react";


const Dropdown = () => {    
    const [open, setOpen] = useState(false);
    
    const colors = ["#2f2f2f", "#d9d9d9"]
    const [isDark, setIsDark] = useState(false)
    const [bgColor, setBgColor] = useState(colors[1])
    const [fontColor, setFontColor] = useState(colors[0])

    const handleDropdownOpen = () => {
        setOpen(!open)
    }

  
    const ChangeBrightness = () => {
      if (!isDark) {
        setIsDark(true)
        setBgColor(colors[0])
        setFontColor(colors[1])
      }
      else {
        setIsDark(false)
        setBgColor(colors[1])
        setFontColor(colors[0])
      }
    }
    
    const items = Array.from(
        document.getElementsByClassName('menu-item') as HTMLCollectionOf<HTMLElement>,
    );

    items.forEach (item => {
        item.style.backgroundColor = bgColor;
        item.style.color = fontColor;
    })

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;

    return (
    <div className='utils'>
        <div className="dropdown">
            <button className="dropdown-btn" onClick={handleDropdownOpen}><img src={isDark? MenuL : MenuD} className="dropdown-img"/></button>
            {open? (
                <ul className="menu">
                    <li className="menu-item">
                        <button onClick={ChangeBrightness} className="dropdown-brightness-btn">
                            <img src={isDark ? Moon : Sun} className="dropdown-brightness-img dropdown-brightness" alt="dark-mode "/>
                            <p className="dropdown-brightness"style={{color: fontColor}}>{isDark? "Dark Mode": "Light Mode"}</p>
                        </button>
                    </li>
                    <li className="menu-item">
                        <button className='dropdown-login' style={{color: fontColor}}>Entrar</button>
                    </li>
                </ul>
            ) : null }
        </div>

        <button className='brightness-btn' onClick={ChangeBrightness}><img src={isDark ? Moon : Sun} className="brightness-img" alt="dark-mode "/></button>
        <button className='login' style={{color: fontColor}}>Entrar</button>
    </div>
  )
}

export default Dropdown