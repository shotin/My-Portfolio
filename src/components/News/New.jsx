import React, {useState, useEffect} from 'react'
import { Spinner } from 'reactstrap';
import { images } from  '../../constants/index'
import { Link } from 'react-router-dom';
import moment from 'moment';

import { FaAngleUp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './news.css'
import axios from 'axios';
import './new.scss'
const News = () => {
    const [products, setProducts] = useState([])
    const [IsLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetchProducts() 
    })

    const fetchProducts = async () => {
        await axios.get(`https://cryptocomicslab.com/api/categories`).then(({data})=>{
            setIsLoading(false)
            setProducts(data)
        })
    }

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

  const sortedProducts = products.reverse()


  return (
       <React.Fragment>
                <main className="app__news_bg element">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 seap_me p-2">
                            <h1 className='comic text-uppercase'>Crypto Comics Lab News</h1>
                            <p className='text-uppercase'>Weekly Reports from Our Lab Analysis.</p>
                              <div id="subscription_area">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="subscribe_now">

                                            <form onSubmit={handleSubmit} class="subscribe_form">
                                                <div class="input-group w-100">
                                                    <input type="email" name='email' className='form-control p-4 mb-3' placeholder='Enter Email' required />
                                                    <span class="input-group-btn">
                                                            <button class="btn btn-default" className='old_btn' style={{padding:'12px', margin: '0.2px'}} type="submit">
                                                                 Subscribe
                                                            </button>
                                                    </span>
                                                </div>
                                                <button className="btn btn-default w-100" id="new_btn" style={{padding:'12px', margin: '0.2px'}} type="submit">Subscribe</button>
                                                {status && renderAlert()} 
                                            </form>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                                </div>
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
                                 {
                                     IsLoading ?
                                     <div className="loader">
                                         <Spinner color="white" />
                                     </div>
                                       :
                                    sortedProducts.length > 0 && (
                                        sortedProducts.map((row, key)=>(
                                          <React.Fragment key={key}>
                                                <div className="col-sm-6 app__next-big p-2 mb-5">
                                             
                                                    <p>{moment(row.created_at).format('MMMM Do YYYY, h:mm a')}</p>
                                                        <Link to={`/cryptoDetails/${row.id}`}>
                                                            <h2 className='text-uppercase font-weight-bolder'>{row.title}.</h2>
                                                        </Link>
                                                        <p className='w-75'>{row.description.substring(0, 100)}.....</p>
                                                </div>
                                            
                                                <div className="col-sm-6 seap_atm request_me mb-5">
                                                    <img className="img-fluid" alt={row.title} src={`https://cryptocomicslab.com/uploads/${row.image}`} />
                                                </div>
                                                <hr style={{width: '100%'}} />
                                          </React.Fragment>
                                        ))
                                    )
                                }
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