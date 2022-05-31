import React from 'react'
import { images } from  '../../constants/index'
import { Link } from 'react-router-dom';
import './news.css'

const News = () => {
  return (
       <React.Fragment>
                <main className="app__news_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 seap_me p-2">
                            <h1 className='comic text-uppercase'>Crypto Comics Lab News</h1>
                            <p className='text-uppercase'>Weekly Reports from Our Lab Analysis.</p>
                            <input type="text" placeholder="Enter Email" className="form-control w-75 p-3" />
                            <span><button className='btn mt-3 text-white p-3 border-0' style={{backgroundColor:'#882CC4'}}>Subscribe</button></span>
                        </div>
            
                        <div className="col-sm-6 flower">  
                            <img src={images.flower} alt="" />   
                        </div>
                    </div>
                </div>
                </main>

                <section className='app__news-volt'>
                    <div className="container gap-100">
                        <div className="row">
                            <div className="col-sm-6 app__next-big p-2 mb-5">
                                 <p> Apr 21, 2022</p>
                                 <Link className=''  to="/cryptoDetails"><h2 className='text-uppercase font-weight-bolder'>Crypto Comics Lab is the<br></br> Next Big Thing.</h2></Link>
                                 <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus suscipit et, sollicitudin cursus.</p>
                            </div>
                
                            <div className="col-sm-6 seap_atm request_me mb-5">  
                                <img src={images.new_pix} className="img-fluid" alt="" />
                            </div>
                            <hr style={{width: '90%'}} />
                            
                            <div className="col-sm-6 app__next-big p-2 mb-5 mt-5">
                                 <p> Apr 21, 2022</p>
                                 <a className='text-dark' href='#'><h2 className='text-uppercase font-weight-bolder'>Crypto and Comics, the new wave of creativity</h2></a>
                                 <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus suscipit et, sollicitudin cursus.</p>
                            </div>
                
                            <div className="col-sm-6 seap_atm request_me mb-5 mt-5">  
                                <img src={images.newshot} className="img-fluid" alt="" />
                            </div>
                            <hr style={{width: '90%'}} />

                            <div className="col-sm-6 app__next-big p-2 mb-5 mt-5">
                                 <p> Apr 21, 2022</p>
                                 <a className='text-dark' href='#'><h2 className='text-uppercase font-weight-bolder'>Volt Issue 1 Drops<br></br> Tomorrow</h2></a>
                                 <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus suscipit et, sollicitudin cursus.</p>
                            </div>
                
                            <div className="col-sm-6 seap_atm request_me mb-5 mt-5">  
                                <img src={images.newvolt} className="img-fluid" alt="" />
                            </div>
                            <hr style={{width: '90%'}} />

                            <div className="col-sm-6 app__next-big p-2 mb-5 mt-5">
                                 <p> Apr 21, 2022</p>
                                 <a className='text-dark' href='#'><h2 className='text-uppercase font-weight-bolder'>Crypto Comics Lab is the<br></br> Next Big Thing.</h2></a>
                                 <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus suscipit et, sollicitudin cursus.</p>
                            </div>
                
                            <div className="col-sm-6 seap_atm request_me mb-5 mt-5">  
                                <img src={images.new_pix} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className=' app__next-big'>
                    <div className="container">
                         <div className="row">
                         <h2 className='text-uppercase font-weight-bolder mb-3 mt-5'>Other Stories</h2>
                            <div className="col-sm-4 p-2 mt-5">
                                <a>
                                    <img src={images.others} className="img-fluid mb-4" alt="" />
                                    <h4 className='text-uppercase font-weight-bolder mb-5'>Crypto and The Current Dip<br></br> in the Market</h4>
                                </a>
                            </div>

                            <div className="col-sm-4 p-2 mt-5">
                                <a>
                                    <img src={images.OtherRun} className="img-fluid mb-4" alt="" />
                                    <h4 className='text-uppercase font-weight-bolder mb-5'>Sleeping and Waiking Up, A <br/>way to live long</h4>
                                </a>
                            </div>

                            <div className="col-sm-4 p-2 mt-5">
                                <a>
                                    <img src={images.OtherVolt} className="img-fluid mb-4" alt="" />
                                    <h4 className='text-uppercase font-weight-bolder mb-5'>Who is Michael and What <br />does he do for a Living</h4>
                                </a>
                            </div>
                         </div>
                    </div>
                </section>
       </React.Fragment>
  )
}

export default News