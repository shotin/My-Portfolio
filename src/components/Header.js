import React from 'react'
import ReactTyped from 'react-typed'

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <canvas></canvas>
            <h1>WEB DEVELOPMENT AND GRAPHICS DESIGN</h1>
            <ReactTyped 
                className='typed-text'
                strings={["Web Design", "Web Development", "Facebook Ads", "Google Ads"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            /> 
            <a href="" value="CONTACT US" className='btn-main-offer'> CONTACT US </a>
        </div>
    </div>
  )
}

export default Header