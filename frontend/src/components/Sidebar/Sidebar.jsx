import {motion} from 'framer-motion'
import './Sidebar.css'
import {FaBars, FaHome} from 'react-icons/fa'
import {RiContactsFill} from 'react-icons/ri'
import {SiAboutdotme} from 'react-icons/si'
import {SiAdminer} from 'react-icons/si'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const routes = [
    {

        path:"/",
        name:"Home",
        icon:<FaHome />,
        
    },
    {

        path:"/Contact",
        name:"Contact",
        icon:<RiContactsFill />,
        
    },
    {

        path:"/About",
        name:"About",
        icon:<SiAboutdotme />,
        
    },
    {

        path:"/Admin",
        name:"Admin",
        icon:<SiAdminer />,
        
    },


]
function Sidebar({children}) {
     
    const [isOpen, setIsOpen] = useState(false)
     const toggle =() => setIsOpen(!isOpen);


    const Image ="https://robinsweb.net/monsterburger/wp-content/uploads/2019/07/Logo.png";
    
  return (
    <div className='mainContainer'>
        <motion.div animate={{width: isOpen ? "200px" : "45px"}} className='sidebar'>
    <div className='top_section'>
        {isOpen && <h1 className='logo'>
        <img src={Image} alt="Logo" />
        </h1>}
    <div className='bars'>
        <FaBars onClick={toggle} />
    </div>

    </div>
       <section className='routes'>
        {routes.map((route)=>(
            <NavLink to={route.path} key={route.name} className="link">
                <div classNme="icon">{route.icon}</div>
                <div classNme="link-text">{route.name}</div>
            </NavLink>
        )
        )}
       </section>
        </motion.div>
        <main>
            {children}
        </main>
        
    </div>
  )
}

export default Sidebar