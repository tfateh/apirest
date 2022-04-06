import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { signin } from '../../redux/actions/authActions'

const Signin = () => {
  
 const dispatch = useDispatch() 
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const isAuth = useSelector(state=>state.authReducer.isAuth)

  useEffect(() => {
    if(isAuth){
      Navigate("/")
    }
  }, [isAuth])
  

const login = (e) =>{
e.preventDefault()

dispatch(signin({email,password}));

<Navigate to="/home" />
setemail("")
setpassword("")
}
  return (
    <>
    
      <h1> Signin</h1> 
  
      <form>
      <input  type="email" placeholder="Email"onChange={(e)=>setemail(e.target.value)} value={email}/>
      <input  type="password" placeholder="password"onChange={(e)=>setpassword(e.target.value)} value={password}/>
          <button onClick={()=>login()}>SignIn</button>
      </form>

    </>
  )
}

export default Signin