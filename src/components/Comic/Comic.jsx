import React from 'react'
import { Link } from 'react-router-dom';
import { images } from  '../../constants/index'
// import { Worker } from '@react-pdf-viewer/core';
// // Import the main component
// import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import './comic.css'

const Comic = () => {
  return (
     <React.Fragment>
          <div className='container'>
            <h1 className='comic comicVolt'>OUR COMICS</h1>
           <div className="container row ourcomics volt_all">
               <div className="col-md-4 shadow mt-3">
                  {/* <div className="shadow mb-3"> */}
                    <div className="row  volt__height volt__margin">
                      <div className="col-md-4 volt_img">
                        <img
                          src={images.volt}
                          alt="VOLT"
                          className="img-fluid inner-img volt_max"
                        />
                        <img src={images.newvolt}  className="img-fluid inner-img volt_min" alt="VOLT" />
                      </div>
                      
                      <div className="col-md-8 volt_read">
                        <div className="card-body">
                          <h2 className="card-title">VOLT1</h2>      
                              <p>Short bio about the comic</p>
                              {/* <Link  className='btn text-white mt-3' to="/Volt" target="_blank" style={{ backgroundColor:'#882CC4', border:'none!important'}}>READ NOW               
                             </Link> */}
                             <a className='btn text-white mt-3'  style={{ backgroundColor:'#882CC4', border:'none!important'}} href={images.voltpdf1} target="_blank" >READ NOW</a>
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