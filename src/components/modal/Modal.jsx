import React from 'react'


function Modal({product}) {
  return (
    <React.Fragment>
        <div className="card mb-3 shadow">
          <div className="row g-0">
              <div className="col-md-4">
                <img
                  alt={product.name} className='img-fluid'
                  src={`http://localhost:8000/uploads/${product.image_name}`}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <h1 className='fw-bold comic described'>{product.name}</h1>
                  <p className="card-text described">
                    {product.description}<br />         
                  </p>              
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  )
}

export default Modal