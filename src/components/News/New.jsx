import React, {useState, useEffect} from 'react'
import { images } from  '../../constants/index'
import { Link } from 'react-router-dom';
// import MailchimpSubscribe from 'react-mailchimp-subscribe';
// import NewsletterForm from './NewsletterForm';
import { FaAngleUp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './news.css'

const News = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            }else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const [values, setValues] = useState({
        email: '',
    });

    const [status, setStatus] = useState('');
    
   const handleSubmit = (e) => {
       e.preventDefault()
       emailjs.send('service_hbel5mr', 'template_p2o0m7w', values, '_d-08AyOzo0pPoswP')
       .then(res => {
           setValues({
            email: ''
          });
          setStatus('SUCCESS');
       }, error => {
        console.log('FAILED...', error);
       })
   }

   useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 6000);
    }
  }, [status]);

  const renderAlert = () => (
    <div className="px-4 py-3 text-dark mt-4 text-center">
      <p>Thank you for Subscribing</p>
    </div>
  )


  return (
       <React.Fragment>
                <main className="app__news_bg element">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 seap_me p-2">
                            <h1 className='comic text-uppercase'>Crypto Comics Lab News</h1>
                            <p className='text-uppercase'>Weekly Reports from Our Lab Analysis.</p>
                           {/* <div className='d-flex'> */}
                          
                              <form onSubmit={handleSubmit}>
                                    <input type="email" name='email' className='form-control p-2 mb-3' placeholder='Enter Email' required />
                                    <button type='submit' className="btn text-white" style={{background: '#684182', border: 'none!important'}}>
                                       Subscribe
                                    </button>
                                    {status && renderAlert()}
                              </form>
                           
                        </div>
            
                        <div className="col-sm-6 subscribeimg">  
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

                <section className='app__next-big'>
                    <div className="container">
                        <div className="row">
                         <h2 className='text-uppercase font-weight-bolder mb-3 mt-5'>Other Stories</h2>
                            <div className="col-sm-4 p-2 app__others">
                                <a style={{cursor: 'pointer'}}>
                                    <img src={images.others} className="img-fluid mb-4" alt="" />
                                    <h4 className='text-uppercase font-weight-bolder mb-5'>Crypto and The Current Dip<br></br> in the Market</h4>
                                </a>
                            </div>

                            <div className="col-sm-4 p-2">
                                <a style={{cursor: 'pointer'}}>
                                    <img src={images.OtherRun} className="img-fluid mb-4" alt="" />
                                    <h4 className='text-uppercase font-weight-bolder mb-5'>Sleeping and Waiking Up, A <br/>way to live long</h4>
                                </a>
                            </div>

                            <div className="col-sm-4 p-2">
                                <a style={{cursor: 'pointer'}}>
                                    <img src={images.OtherVolt} className="img-fluid mb-4" alt="" />
                                    <h4 className='text-uppercase font-weight-bolder mb-5'>Who is Michael and What <br />does he do for a Living</h4>
                                </a>
                            </div>    
                         </div>
                    </div>
                </section>

                <div className="top-to-btm">
                        {" "}
                    {showTopBtn && (
                        <FaAngleUp
                            className="icon-position icon-style"
                            onClick={goToTop}
                        />
                    )}{" "}
                </div>
       </React.Fragment>
  )
}


export default News