import React from 'react'
import SunEditor from 'suneditor-react'
import "suneditor/dist/css/suneditor.min.css";
import "./modal.css"


function Modal({product}) {
  return (
    <React.Fragment>
        <div className="mb-3 volt_dark">
          <div className="row g-0">
              <div className="col-md-4 mt-4">
                <img
                  alt={product.name} className='img-fluid'
                  src={`https://cryptocomicslab.com/uploads/${product.image}`}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <h1 className='fw-bold comic described'>{product.title}</h1>
                  {/* <p style={{textAlign:'justify'}} className="card-text described">
                    {product.description}     
                  </p>               */}
                   <SunEditor   
                        hideToolbar={true}
                        disable={true}
                        height="100%"
                        setContents={product?.description} 
                        autoFocus={false}
                        setDefaultStyle={"font-family: Campton; font-family: Campton; font-size: 16px; font-weight: 400; line-height: 27px; letter-spacing: -0.02em; text-align: left; "}
                        disableToolbar={true}
                    />
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  )
}

export default Modal