import { useState } from "react"

const index = () => {

    const menuOption = [
        {
            title : "Home",
            path : "#home"
        },
        {
            title : "About",
            path : "#about"
        },
        {
            title : "Products",
            path : "#products"
        },
        {
            title : "FAQs",
            path : "#faqs"
        },
        {
            title : "Contact Us",
            path : "#contact"
        }
    ]

    const [activeNav,setactiveNav] = useState(0);
  return (<>
  
  <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">
                <i className="ri-leaf-line nav__logo-icon"></i> Plantex
            </a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">

                    {
                        menuOption.map((val:any,index:number) =>{
                            return <li className="nav__item" onClick={()=>{setactiveNav(index)}}>
                            <a href={val.path} className={`nav__link ${activeNav===index ? "active-link" : ""}`}>{val.title}</a>
                        </li>
                        })
                    }
                    
                </ul>

                <div className="nav__close" id="nav-close">
                    <i className="ri-close-line"></i>
                </div>
            </div>

            <div className="nav__btns">
            
                <i className="ri-moon-line change-theme" id="theme-button"></i>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-menu-line"></i>
                </div>
            </div>
        </nav>
    </header>
  
  </>)
}

export default index