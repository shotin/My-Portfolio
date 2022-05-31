import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import images from '../../constants/images';
import './about.css'


const About = (props) => {
  console.log(props)
  return (
    <Fragment>
       <div>
           <div className="app__about-main">
              <div className="container">
                  <div className="row">
                    <div className="col-sm-6 center">
                      <h1 className='text-white'>ABOUT US</h1>
                      <p className='text-white'>Our creative team of experts are brought together to build one of the World’s best art works. We're looking for creative builders, makers, and doers. The ones who share our passion for web3, art, and culture.</p>
                    </div>

                    <div className="col-sm-6 readbook">
                      <img src={images.readBook} className="img-fluid mt-2" alt="" />
                    </div>
                  </div>
              </div>
            </div>

            <div className='center1'>
              <div className="container">
                  <div className="row">
                      <div className='col-sm-6 center2 app__comic'>
                          <h1 className='text-white'>MEET OUR CREATIVE TEAM</h1>
                          <p  className='text-white'>Our creative team of experts are brought together to build one of the World’s best art works. We're looking for creative builders, makers, and doers. The ones who share our passion for web3, art, and culture.</p>
                      
                                <Link className='btn btn-sm' to="/meet"> MEET OUR TEAM</Link>
                            {/* </a> */}
                      </div>

                      <div className='col-sm-4 center3'>
                          <h3 className='text-white'>CONTACT US</h3>
                          <p className='text-white mt-3'><a href='#'><i class="fa-brands fa-twitter fa-1x"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span>@CCLabs_</span></a></p>
                          <p className='text-white mt-3'><a href='#'><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span>@cryptocomicslab@gmail.com</span></a></p>
                          <p className='text-white mt-3'><a href='#'><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span>08099348883</span></a></p>
                          <p className='text-white mt-3'><a href='#'><i class="fa-solid fa-paper-plane"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span>Crypto Comics Lab</span></a></p>
                      </div>
                  </div>
              </div>
          </div>
       </div>
    </Fragment>
  )
}

export default About