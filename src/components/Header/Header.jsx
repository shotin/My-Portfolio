import React from 'react'
import {Link} from 'react-router-dom';
// import { images } from  '../../constants/index'
import './header.css'

const Header = () => {
  return (
    <React.Fragment>
     <header id="offdark">
        <div className='mbr-fullscreen p-5 text-center bg-image main_bg'
        >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white app__comic'>
              <h1 className='mb-3 app__comic text-uppercase'>Welcome to <br /> Crypto Comics Lab</h1>
              {/* <a className='btn bg-light btn-lg' href='#!' role='button'> */}
                  <Link className='btn btn-lg' to="/home">ENTER NOW</Link>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </header>
    </React.Fragment>
  )
}

export default Header