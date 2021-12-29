import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
const Header=()=>{
    return (
           <div >
                <nav className="navbar navbar-dark bg-dark main ">
                <ul className='ul td'>
                   <div  >
                   <li className='li'> <Link to='/home'>    Home </Link></li>
                  <li> <Link to="/catageries">Show All Catageries Of Meal</Link></li>
                   </div>
                </ul>
            </nav>
           </div>
    )
}
export default Header