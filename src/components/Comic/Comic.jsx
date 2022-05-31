import React from 'react'
import { Link } from 'react-router-dom';
import { images } from  '../../constants/index'
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import './comic.css'

const Comic = () => {
  return (
     <React.Fragment>
          <div className='container'>
            <h1 className='mt-5 comic'>OUR COMICS</h1>
           <div className="row ourcomics">
               <div className="col-md-4 shadow mt-3">
                  {/* <div className="shadow mb-3"> */}
                    <div className="row">
                      <div className="col-md-4 volt_img">
                        <img
                          src={images.volt}
                          alt="VOLT"
                          className="img-fluid inner-img"
                        />
                      </div>
                      
                      <div className="col-md-8">
                        <div className="card-body">
                          <h2 className="card-title">VOLT1</h2>      
                              <p>Short bio about the comic</p>
                              <Link  className='btn text-white mt-3' to="/Volt" target="_blank" style={{ backgroundColor:'#882CC4', border:'none!important'}}>READ NOW               
                             </Link>
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
               </div>
           </div>
          </div>
     </React.Fragment>
  )
}

export default Comic