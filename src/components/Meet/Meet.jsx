import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';
import './meet.css'
import { UserDetails } from '../../constants/images';

const Meet = () => {
  let history = useHistory();
  const [user, setUser] = useState({})
  
  const filterDetails = (e, id)=> {
    e.preventDefault()
    const user = UserDetails.find(item=> item.id === id)
    setUser(user)
  }

  const displayDetails = () => {
    return UserDetails.map(detail=>{
        return (
            <div className='col-4 text-left meetBorder' key={detail.id}>
                <a onClick={ (e) => filterDetails(e,detail.id)}>
                    <div className='getHover'>
                        <img src={detail.image} className="img-fluid smallImage" alt=""/>
                        <h4 className='mt-2 comic ml-5'>{detail.name}</h4>
                        <p>{detail.title}</p>
                    </div>
                    <p className='describe'>{detail.description}</p>
                </a>
            </div>
        )
    })
  }

    return (
        <React.Fragment>
           <div className="container app__meet_bg element" id='scroll_none'>
              <div id="container2">
                <i style={{cursor:'pointer'}} onClick={() => history.goBack()} class="fa-solid fa-circle-arrow-left mt-5 fa-1x"> Back</i>
                <div className="row creative_up">
                    <h1 className='mt-5 comic'>CREATIVE TEAM</h1>
                        <div className='col-sm-5 col-md-5'>
                            <div className="row getBorder">
                                {displayDetails()}
                            </div>

                            <div className='mt-5 app__desribe-small'>
                                 <div className='d-flex'>
                                     <h3 className='comic'>{user?.name}</h3>
                                     &nbsp;&nbsp;<span style={{fontSize: '11px'}} className='mb-1 mt-2 text-uppercase'>{user?.title}</span>
                                 </div>
                                  <p>{user?.description}</p> 
                            </div>
                        </div>
  
                        <div className="col-sm-7 sideImg"> 
                                <img style={{cursor: 'pointer'}} className='img-fluid' src={user?.BigImage} alt={user?.name}/>             
                        </div>
                </div>
              </div>
           </div>
        </React.Fragment>
    );
}

export default Meet