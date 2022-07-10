import React from 'react'
import WebViewer from '@pdftron/pdfjs-express-viewer';

import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { images } from '../constants';
import { Link } from 'react-router-dom';
import './volt.css'

const Volt = () => {
const defaultLayoutPluginInstance = defaultLayoutPlugin();
const fullScreenPluginInstance = fullScreenPlugin();

return (
     <React.Fragment>
            <Link to="/home"><a className="container navbar-brand mt-4"><img className=' logo' src={ images.logo } alt="logo" /></a></Link>
          <div className='container-fluid'>
                 <div className="row">
                      <div className="col-sm-12">
                          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                            <div className="col-md-12 mt-4" style={{width:'100%' }}>
                                <Viewer fileUrl={images.voltpdf1} plugins={[defaultLayoutPluginInstance, fullScreenPluginInstance]} />
                            </div>
                          </Worker>   
                      </div>
                 </div>
          </div>
     </React.Fragment>
  )
}

export default Volt

// import React, { useState } from 'react';
// import { Document, Page,pdfjs } from 'react-pdf';
// import { images } from '../constants';

// export default function Volt() {
	
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// const [numPages, setNumPages] = useState(null);
// const [pageNumber, setPageNumber] = useState(1);

// /*To Prevent right click on screen*/
// document.addEventListener("contextmenu", (event) => {
// 	event.preventDefault();
// });
	
// /*When document gets loaded successfully*/
// function onDocumentLoadSuccess({ numPages }) {
// 	setNumPages(numPages);
// 	setPageNumber(1);
// }

// function changePage(offset) {
// 	setPageNumber(prevPageNumber => prevPageNumber + offset);
// }

// function previousPage() {
// 	changePage(-1);
// }

// function nextPage() {
// 	changePage(1);
// }

// return (
// 	<>
//   	<div className='p-2 text-white' style={{textAlign: 'center', marginBottom: '40px!important', backgroundColor: '#3E3C53'}}>
// 		<div className="pagec">
// 		Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
// 		</div>
// 		<div className="button mb-1">
// 		<button
// 		type="button"
// 		disabled={pageNumber <= 1}
// 		onClick={previousPage}
// 		className="Pre"
			
// 		>
// 		Previous
// 		</button>
// 		<button
// 		type="button"
// 		disabled={pageNumber >= numPages}
// 		onClick={nextPage}	
// 		>
// 		&nbsp;&nbsp;&nbsp;Next
// 		</button>
// 		</div>
// 	</div>

// 	<div className="container volt-img">
// 	<Document
// 		file={images.voltpdf1}
// 		onLoadSuccess={onDocumentLoadSuccess}
// 	>
// 		<Page width={350} pageNumber={pageNumber} />
// 	</Document>
// 	</div>
// 	</>
// );
// }
