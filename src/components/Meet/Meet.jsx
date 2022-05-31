import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';
// import { images } from  '../../constants/index'
import './meet.css'
import { UserDetails } from '../../constants/images';

const Meet = () => {
  let history = useHistory();
  const [user, setUser] = useState({})
  
  const filterDetails = (e,id)=> {
    e.preventDefault()
    const user = UserDetails.find(item=> item.id === id)
    setUser(user)
  }

  const displayDetails = ()=>{
    return UserDetails.map(detail=>{
        return (
            <div className='col-sm-4 text-left meetBorder' key={detail.id}>
                <a onClick={(e) =>  filterDetails(e,detail.id)}>
                    <img src={detail.image} className="img-fluid" alt=""/>
                    <h4 className='mt-2 comic ml-5'>{detail.name}</h4>
                    <p>{detail.title}</p>
                </a>
            </div>
        )
    })
  }

    return (
        <>
           <div className="container app__meet_bg">
               <div className="row">
                   <i style={{cursor:'pointer'}} onClick={() => history.goBack()} class="fa-solid fa-circle-arrow-left mt-5 fa-1x"> Back</i>
                   <h1 className='mt-5 comic'>CREATIVE TEAM</h1>
                     <div className='col-sm-6 mb-5'>
                        <div className="row getBorder">
                           {displayDetails()}
                        </div>
                        <div className='ceo'> 
                            <h1 className='mt-5 comic'>{user.name}</h1><span><p>{user.title}</p></span>
                            <p>{user.description}</p> 
                        </div>
                    </div>

                   <div className="col-sm-6 sideImg"> 
                           <img className='img-fluid' src={user?.BigImage} alt={user?.name}/>
                        {/* <h1 className='mt-5 comic mb-3 ml-5'>{user.name}</h1><span><p className='mb-3'>{user.title}</p></span>
                        <p className='text-left ml-5'>{user?.description}</p> */}
                   </div>
               </div>
           </div>
        </>
    );
}

export default Meet