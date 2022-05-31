import React,{useState} from 'react'
import { images } from  '../../constants/index'
import { Link } from 'react-router-dom'
import './navbar.css'
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <React.Fragment>
                <div>
                  <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link to="/home"><a className="navbar-brand"><img src={ images.logo } alt="logo" /></a></Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-label="Toggle navigation"
                    aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse}
                    >
                    <i className="fas fa-bars bg-light p-2"></i>
                    </button>
                    <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} className="collapse navbar-collapse app__nav" id="navbarNav">
                        <ul className="navbar-nav app__header">
                            <li className="nav-item app__header-nav"  >
                               <Link to="/home">HOME</Link>
                            </li>

                            <li className="nav-item app__header-nav">
                               <Link  to="/comic">COMICS</Link>
                            </li>

                            <li class="nav-item dropdown explore__header-nav">
                                <Link className='dropdown-toggle' to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> EXPLORE</Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                  <li><Link class="dropdown-item text-dark" to="/explore">Volt Vault</Link></li>
                                  <li><Link class="dropdown-item  text-dark" to="#">Hunt Vault</Link></li>
                                  <li><Link class="dropdown-item  text-dark" to="/news">News</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item app__header-nav app__shop">  
                               <Tooltip title="Coming Soon" arrow>
                               <Link to="#">SHOP</Link>
                                </Tooltip>
                            </li>

                            <li className="nav-item app__header-nav app__shop">
                               <Tooltip title="Coming Soon" arrow>
                                 <Link to="#">LAB</Link>
                                </Tooltip>
                            </li>

                            <li className="nav-item app__header-nav">
                               <Link to="/about">ABOUT US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
                </div>
    </React.Fragment>
  )
}

export default Navbar