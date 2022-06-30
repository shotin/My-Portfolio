import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { images } from  '../../constants/index'
import { FaAngleUp } from 'react-icons/fa';
import './cryptoDetails.css'

const CryptoDetails = () => {
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
    let history = useHistory();
  return (
       <React.Fragment>
                <div className="web_news">
                    <div className="flower">
                        <div className="container">
                            <div className="row news_details">
                                <div className="col-sm-6" style={{marginTop: '320px'}}>
                                    <p className='text-white fw-bold'> Apr 21, 2022</p>
                                    <h2 className='text-uppercase fw-bolder text-white'>Crypto Comics Lab is the<br></br> Next Big Thing.</h2>
                                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus suscipit et, sollicitudin cursus.</p>
                                    <p style={{color: 'orange'}}>Mr Samuel</p>
                                    <img style={{cursor: 'pointer'}} onClick={() => history.goBack()} src={images.back} alt="back" className='mb-4 mt-2' />
                                </div>

                                {/* <div className="col-sm-6" style={{marginTop: '390px'}}>
                                    <img src={images.back} alt="back" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
        
                <section className='app__news-volt'>
                    <div className="container mt-5">
                        <div className="row affect_us">
                             <h1 className='comic text-uppercase mb-3'>How this Affects Us</h1>
                             <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus vitae tempus magna odio vitae. Cursus pharetra vitae dictum elementum lobortis dignissim aenean. Est, commodo risus tristique vulputate. Posuere nunc, ac suscipit et quis dictumst vel aliquam non. Suspendisse vulputate aliquam, pulvinar diam amet tincidunt quam. Arcu et auctor leo ullamcorper nibh. Elementum tellus neque, sapien faucibus dapibus. At consectetur elementum rutrum blandit nibh interdum feugiat habitasse. Consequat risus convallis in nullam praesent metus volutpat ut. A pharetra, vehicula interdum aliquet nisi, amet est. Neque odio amet nibh feugiat duis euismod faucibus libero. Tristique sit neque, urna, sed. Pellentesque sed adipiscing laoreet sem nunc non.
                            Vitae viverra nam at rutrum rhoncus. Blandit dui ipsum mauris ut faucibus iaculis nunc. Adipiscing ornare mauris, urna, aliquam id bibendum aenean cursus massa. Feugiat morbi lectus est, feugiat morbi. Duis ullamcorper sed vitae, nec maecenas enim, quam. Aliquet est viverra lectus at consectetur morbi donec. Ipsum augue et vel justo. Volutpat sit odio neque sit. Vulputate dui cras ipsum odio dui. At porta nunc lacus massa amet. Sit quis sapien tortor amet. Morbi erat sit duis habitasse et, at cras non, libero. Eget fringilla quam donec scelerisque proin accumsan.</p>
                            <img src={images.OtherRun} className="img-fluid mb-4" alt="" />
                            <p>Molestie amet hendrerit ac habitasse arcu in posuere quis commodo. Maecenas mattis sit eu quam. Neque cursus tortor elementum erat convallis faucibus. Nullam malesuada tempus venenatis lorem at eu aliquam diam hendrerit. Sem facilisis eget vivamus scelerisque mauris malesuada neque. Vitae laoreet at facilisi nec. Pulvinar fames mattis hac semper suscipit elit. Sagittis vulputate scelerisque semper libero, congue adipiscing neque. Nullam aenean gravida urna, blandit viverra leo. Magnis dapibus est viverra proin in nisl. Sociis non fermentum dignissim elit. Arcu orci tincidunt scelerisque parturient sed sed molestie.Molestie amet hendrerit ac habitasse arcu in posuere quis commodo. Maecenas mattis sit eu quam. Neque cursus tortor elementum erat convallis faucibus. Nullam malesuada tempus venenatis lorem at eu aliquam diam hendrerit. Sem facilisis eget vivamus scelerisque mauris malesuada neque. Vitae laoreet at facilisi nec. Pulvinar fames mattis hac semper suscipit elit. Sagittis vulputate scelerisque semper libero, congue adipiscing neque. Nullam aenean gravida urna, blandit viverra leo. Magnis dapibus est viverra proin in nisl. Sociis non fermentum dignissim elit. Arcu orci tincidunt scelerisque parturient sed sed molestie.</p>
                        </div>
                    </div>
                </section>

                <section className=' app__next-big'>
                    <div className="container">
                         <div className="row">
                         <h2 className='text-uppercase font-weight-bolder mb-3 mt-5'>Other Stories</h2>
                            <div className="col-sm-4 p-2 mt-5">
                                <a style={{cursor: 'pointer'}}>
                                    <img src={images.others} className="img-fluid mb-4" alt="" />
                                    <h4 className='text-uppercase font-weight-bolder mb-5'>Crypto and The Current Dip<br></br> in the Market</h4>
                                </a>
                            </div>

                            <div className="col-sm-4 p-2 mt-5">
                                <a style={{cursor: 'pointer'}}>
                                    <img src={images.OtherRun} className="img-fluid mb-4" alt="" />
                                    <h4 className='text-uppercase font-weight-bolder mb-5'>Sleeping and Waiking Up, A <br/>way to live long</h4>
                                </a>
                            </div>

                            <div className="col-sm-4 p-2 mt-5">
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

export default CryptoDetails