import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import images from '../../constants/images';
import './about.css'


const About = ({}) => {
  function Mailto({ email, ...props }) {
    return (
      <a href={`mailto:${email}`}>
        {props.children}
      </a>
    );
  }
  return (
    <Fragment>
      {/* <div class="img">
            <img src="/img/team/jerry.png" alt="" />
              <div class="mask">Decade in game development,operation and marketing, ranked most downloaded game in IOS app store.</div>
      </div> */}
       <div>
           <div className="app__about-main aboutUp">
              <div className="container">
                  <div className="row">
                    <div className="col-sm-6 center mt-5">
                      <h1 className='text-white'>ABOUT US</h1>
                      <p className='text-white'>Our creative team is brought together by the common passion for storytelling, art, and Web3. If it is fiction or reality, there is an endless story to be told and new ones unfolding everyday and week in the crypto space. We seek to educate readers of our comics about crypto while they also have fun with our stories. Whether you are a crypto enthusiast or not, there is something for everyone in our space.</p>
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
                          <h1 className='text-white'>MEET OUR &nbsp; CREATIVE &nbsp; MINDS</h1>
                         
                                <Link className='btn btn-lg' to="/meet"> TEAM <i class="fa-light fa-greater-than fw-bolder"></i></Link>
                            {/* </a> */}
                            <div className='about_break'></div>
                      </div>

                      <div className='col-sm-4 center3'>
                          <h3 className='text-white'>CONTACT US</h3>
                          <p className='text-white mt-3'>   
                            <a href='#'><i className="fa-brands fa-twitter fa-1x"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span>@CCLabs_</span></a></p>
                             <p className='text-white mt-3'>
                               <a href='#'><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                <Mailto email="hello@cryptocomicslab.com" subject="Hello" body="Hello world!">
                                hello@cryptocomicslab.com
                                </Mailto>
                                </span>
                              </a>
                            </p>
                            <p className='text-white mt-3'><a href='tel:+2349071647043'><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span>+2349071647043</span></a></p>
                            <p className='text-white mt-3'><a href='#'><i className="fa-solid fa-paper-plane"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span>Crypto Comics Lab</span></a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
       </div>
    </Fragment>
  )
}

export default About