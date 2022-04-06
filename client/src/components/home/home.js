import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const home = () => {
    const isAuth = useSelector(state=>state.authReducer.isAuth)
    const loading = useSelector(state=>state.authReducer.loading)
    const Navigate = useNavigate()

    useEffect(() => {
      if(isAuth === false){
        Navigate("/signin")
      }
    }, [isAuth])
    

    return (
    <div>
   true
    </div>
  )
}

export default home