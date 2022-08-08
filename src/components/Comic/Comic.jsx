import React from 'react'
import { Link } from 'react-router-dom';
import { images } from  '../../constants/index'

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import './comic.css'

const Comic = () => {
  return (
     <React.Fragment>
          <div className='container'>
            <h1 className='comic comicVolt'>OUR COMICS</h1>
              <div className="container row ourcomics volt_all">
                  <div className="col-md-2 mt-3 row volt__height volt__margin">
                        <Link  to="/Volt" target="_blank">
                            <img
                              src={images.volt}
                              alt="VOLT"
                              className="img-fluid inner-img volt_max"
                            />
                        </Link>
                  </div>
              </div>
          </div>
     </React.Fragment>
  )
}

export default Comic