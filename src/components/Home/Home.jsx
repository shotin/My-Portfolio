import React, {useState} from 'react'
import { images } from  '../../constants/index'
import './home.css'

const Home = () => {
   
    const [show, setShow] = useState(false);
  
    const handleOnClick = () => {
        setShow(true);
    };

    const handleOnClickHide = () => {
        setShow(false);
    }
    
  return (
       <React.Fragment>
               <div className='landing_small'>
                      <div className='element'>
                           <div className='home'>
                                {/* <img src={images.small_pix} alt="comic" className='bigsam' /> */}
                           </div>
                        <div className='landing'>
                            <img src={images.Mainone} className='img-fluid' alt="" />
                        </div>
                   <div className='container'>
                         <div className="row text-left icons">
                             <p className="fa-2x d-flex">
                             {show ? (
                                <div>
                                    <a style={{cursor: 'pointer', marginRight: '30px'}}>
                                           <i  onClick={handleOnClickHide} className='fa fa-minus text-white'></i>
                                     </a>
                                </div>
                               ) : <div>
                                        <a style={{cursor: 'pointer', marginRight: '30px'}}>
                                            <i onClick={handleOnClick} className='fa fa-plus text-white'></i>
                                        </a>
                                    </div>}                                    
                                 {show ? (
                                     <div>
                                         <a style={{cursor: 'pointer', marginRight: '30px'}}>
                                              {/* <img style={{cursor: 'pointer'}} onClick={handleOnClick} src={images.gitBook} alt="gitbook" /> */}
                                              <span><i class="fa-solid fa-book text-white"></i></span>
                                         </a>
                                        <a style={{cursor: 'pointer', marginRight: '30px'}}>
                                            <span><i className="fa-brands fa-twitter text-white"></i></span>
                                        </a>
        
                                        <a style={{cursor: 'pointer', marginRight: '30px'}}>
                                            <span><i className="fab fa-discord text-white"></i></span>
                                        </a>
                                        
                                        <a style={{cursor: 'pointer', marginRight: '30px'}}>
                                            <span><i className="fa-solid fa-envelope text-white" ></i></span>
                                        </a>
                                     </div>
                                ) : ''}                                
                             </p>
                         </div>
                     </div>
               </div>
               </div>
       </React.Fragment>
  )
}

export default Home