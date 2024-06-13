import React,{useState} from 'react'
import './Signin.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Signin = () => {
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const user_auth = async (e)=>{
    e.preventDefault()
    setLoading(true)
    if(signState==="Sign In"){
      await login(email, password)
    }else{
      await signup(name,email,password)
    }
    setLoading(false)
  }

  return (
    loading? <div className='login-spinner'>
              <img src={netflix_spinner} alt=""/>
              </div>:
    <div className="signin">
      <img src={logo} alt="" className='signin-logo'/>
      <div className='signin-form'>
        <h1>{signState}</h1>

        <form action="">
          {signState==="Sign In"?  <></>:<input type="text" placeholder="Your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>}

          <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit" onClick={user_auth}>{signState}</button>

          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox"/>
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className='form-switch'>
          {signState==="Sign In"? <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}> Sign Up Now </span></p>
                                :  <p>Already Have an Account? <span onClick={()=>{setSignState("Sign In")}}> Sign In Now </span></p> 
           }

        </div>
      </div>
    </div>
  )
}

export default Signin