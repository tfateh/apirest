import { set } from 'express/lib/application'
import { get } from 'express/lib/response'
import React, { useState,useSelector } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../redux/actions/authActions'

const Signup = () => {

  const dispatch = useDispatch()
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [adress, setadress] = useState("")

  const msg = useSelector((state) => state.authReducer.msg);
  const errors = useSelector((state) => state.authReducer.errors);
  const navigate = useNavigate();

  
const register = (e) =>{
e.preventDefault()
const newUser = {
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  adress
}

dispatch(signup(newUser))
setfirstName("")
setlastName("")
setadress("")
setemail("")
setpassword("")
setphoneNumber("")

}
const isAuth = useSelector((state) => state.authReducer.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <>
        <h1>Sign Up</h1>
    
    <form>
        <input  type="text" placeholder="First Name" onChange={(e)=>setfirstName(e.target.value)}  value={firstName}/>
        <input  type="text" placeholder="last Name"onChange={(e)=>setlastName(e.target.value)}  value={lastName}/>
        <input  type="email" placeholder="Email"onChange={(e)=>setemail(e.target.value)} value={email}/>
        <input  type="password" placeholder="password"onChange={(e)=>setpassword(e.target.value)} value={password}/>
        <input  type="text" placeholder="phone number"onChange={(e)=>setphoneNumber(e.target.value)}  value={phoneNumber}/>
        <input  type="text" placeholder="Adress"onChange={(e)=>setadress(e.target.value)} value={adress} />
        <button onClick={()=>register()}></button>
    </form>
    
    </>
  )
}

export default Signup