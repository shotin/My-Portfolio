import React from 'react'
import { images } from  '../../constants/index'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
       <React.Fragment>
                <main>
                   <img className="app__main_bg img-fluid" src={ images.Mainone } alt="logo" />
                    <div className='something container'>
                        <div className="row text-left volt">
                            <div className="col-sm-10">
                                <p className="text-white text-uppercase">Something is Coming</p>
                                <h4 className=" text-white text-uppercase">Volt Issus 2</h4>
                            </div>

                            <div className="col-sm-2">
                                 <Link className='text-dark' to="/comic">   <button type="button" className="btn btn-light btn-md" data-mdb-ripple-color="dark">View</button></Link>
                            </div>
                        </div>
                    </div>
                </main>
       </React.Fragment>
  )
}

export default Home