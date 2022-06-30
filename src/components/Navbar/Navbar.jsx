import React,{useState} from 'react'
import { images } from  '../../constants/index'
import { Link } from 'react-router-dom'
import './navbar.css'
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {


  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
 
  return (
    <React.Fragment>
                <div>
                  <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container app_all" id='fixed'>
                    <Link to="/home">
                      <a className="navbar-brand logo1">
                        <img className='logo' src={ images.logo } alt="logo" />
                      </a>
                    </Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-label="Toggle navigation"
                    aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse}
                    >                
                      <i className={isNavCollapsed ? 'fas fa-times togg' : 'fas fa-bars togg'} />
                    </button>
                    
                    <div className={`${isNavCollapsed ? 'collapse' : ''} collapse navbar-collapse app__nav` }  id="navbarNav">
                        <ul className={isNavCollapsed ? 'nav-menu active navbar-nav app__header' : 'nav-menu navbar-nav app__header'}>
                            <li className="nav-item app__header-nav"  >
                               <Link to="/home"  onClick={handleNavCollapse}>HOME</Link>
                               {/* <hr /> */}
                               <div className='marginNav'></div>
                            </li>

                            <li className="nav-item app__header-nav">
                               <Link  to="/comic"  onClick={handleNavCollapse}>COMICS</Link>
                               {/* <hr /> */}
                               <div className='marginNav'></div>
                            </li>

                            <li class="nav-item dropdown explore__header-nav">
                                <Link className='dropdown-toggle'  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> EXPLORE</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                  <li><Link className="dropdown-item text-dark" to="/explore" onClick={handleNavCollapse}>Volt Vault</Link></li>
                                  <li><Link className="dropdown-item  text-dark" to="#" onClick={handleNavCollapse}>Hunt Vault</Link></li>
                                  <li><Link className="dropdown-item  text-dark" to="/news" onClick={handleNavCollapse}>News</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item app__header-hunt app__header-nav">
                            <Link  to="/explore" onClick={handleNavCollapse}>Volt Vault</Link>
                               {/* <hr /> */}
                               <div className='marginNav'></div>
                            </li>

                            <li className="app__header-hunt app__header-nav">
                                <Link  to="#" onClick={handleNavCollapse}>Hunt Vault</Link>
                                {/* <hr /> */}
                                <div className='marginNav'></div>
                            </li>

                            <li className="app__header-hunt app__header-nav">
                                <Link to="/news" onClick={handleNavCollapse}>News</Link>    
                                {/* <hr /> */}
                                <div className='marginNav'></div>
                            </li>

                            <li className="nav-item app__header-nav app__shop">  
                               <Tooltip title="Coming Soon" arrow>
                                   <Link className='shopLarge' to="#" onClick={handleNavCollapse}>SHOP</Link>
                                </Tooltip> 

                                 <Link className='shopSmall' style={{display: 'none'}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" to="#" onClick={handleNavCollapse}>SHOP</Link>
                                
                                                    {/* <hr /> */}
                                <div className='marginNav'></div>
                            </li>

                            <li className="nav-item app__header-nav app__shop">
                               <Tooltip title="Coming Soon" arrow>
                                 <Link className='shopLarge' to="#" onClick={handleNavCollapse}>LAB</Link>
                                </Tooltip>
                                {/* <hr /> */}

                                <Link className='shopSmall' style={{display: 'none'}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" to="#" onClick={handleNavCollapse}>LAB</Link>

                                <div className='marginNav'></div>
                            </li>

                            <li style={{borderBottom: 'none'}} className="nav-item app__header-nav about-us">
                               <Link to="/about" onClick={handleNavCollapse}>ABOUT US</Link>
                               {/* <div className='marginNav'></div> */}
                            </li>

                           <div className='cclabs'>
                              <p className='text-white'>
                                    <a href='#'><i className="fa-brands fa-twitter fa-1x"></i>&nbsp;&nbsp;&nbsp;    
                                        <span>@CCLabs_</span>
                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href='#'>
                                      <i className="fa-solid fa-paper-plane"></i>
                                      &nbsp;&nbsp;&nbsp;<span>Crypto Comics Lab</span>
                                    </a>
                              </p>
                              
                              <p className='text-white mt-3'><a href='#'><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;<span>hello@cryptocomicslab.com</span></a>
                              </p>
                           </div>
                        </ul>
                    </div>
                </div>
                </nav>
                </div>


{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      {/* <div className="modal-header"> */}
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      {/* </div> */}
        <div className="modal-body text-center">
            <h1 className='coming__soon'>Coming Soon</h1>
        </div>
    </div>
  </div>
</div>
    </React.Fragment>
  )
}

export default Navbar