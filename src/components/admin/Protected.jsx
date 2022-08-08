import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'

export default function Protected(props) {
    const history = useHistory();
    let Cmp = props.Cmp
    useEffect(() => {
       if(!localStorage.getItem('user-info')){
        history.push("/login")
       }
    }, [])
  return (
    <div>
        <Cmp />
    </div>
  )
}
