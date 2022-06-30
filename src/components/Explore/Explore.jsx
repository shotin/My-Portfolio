import React, {useEffect, useState} from 'react'
import { Spinner } from 'reactstrap';
import axios from "axios";
import Modal from '../modal/Modal';
import './explore.css';
import BModal from '../modal/BModal';

function Explore() {
  
  const [images, setImages] = useState([])
  const [productImg, setProductImg] = useState([])
  const [IsLoading, setIsLoading] = useState(true);

  // const [modals, setModal] = useState([])
  const [isOpen, setIsOpen]= useState(false)


  const handleClose = ()=> setIsOpen(false)
  const handleOpen = ()=> setIsOpen(true)

  useEffect(() => {
       axios.get("http://localhost:8000/api/images").then((response) => {
          setIsLoading(false)
          setImages(response.data.data);
          // https://dashboard.heroku.com/apps/arcane-dawn-86332
          // http://localhost:8000/api/images
    })
  }, [])


  const getImageById = (id) => {
    const singleImage = images.find(item=> item.id === id)
    setProductImg(singleImage)
    handleOpen()
  }


  return (
    <React.Fragment>
    <div className='container voltBig'>
      <h1 className='fw-bold mt-5 comic mb-3 mt-5'>VOLT VAULT</h1>
      <div className="input-group">
        <button type="button" className="btn">
            <i className="fas fa-search search"></i>
        </button>
        <div className="form-outline">
            <input type="search" id="form1" class="form-control" />
            <label className="form-label" for="form1"><p className='search'>Search Specimen</p></label>
        </div>
      </div>
        <div className="row">
        {
          IsLoading ?
          <div className="loader">
              <Spinner color="white" />
          </div>
            :
            images.map((image) => (
              <div className="col-lg-3 col-sm-6 mt-5 upload">
              <div class="card shadow nft_img volt_img text-center w-100">
                <img src={"http://localhost:8000/uploads/" + image.image_name} class="card-img-top inner-img img-fluid"/>
                <div className="card-body">
                  <button className="btn btn-sm text-white" onClick={()=>getImageById(image.id)}>{image.name}</button>                              
                </div>
              </div>
            </div>
            ))
          }
        </div>
    </div>
    {isOpen &&
      <BModal
      open={isOpen}
      close={handleClose}
      size="lg"
      centered
      >
        <Modal product={productImg}/>
      </BModal> 
    }
</React.Fragment>
  )
}

export default Explore