import React,{useRef, useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

 

const Navbar = () => {

  // const navRef = useRef('')
  // const scrollHandler = ()=>{
  //   window.scrollY>= 80? navRef.current.classList.add('nav-dark') :navRef.current.classList.remove('nav-dark')
  // }
  //     console.log("navref-->"+!!(navRef.current))


  // useEffect(()=>{
  //   window.addEventListener('scroll',scrollHandler)
  //   // console.log("navref-->"+JSON.stringify(navRef.current))
  // },[])

  return (
    <div className='navbar'>    
        <div className='navbar-left'>
          <img src={logo} alt=""></img>
          <ul>
            <li><a>Home</a></li>
            <li><a>TV Shows</a></li>
            <li><a>Movies</a></li>
            <li><a>New & Popular</a></li>
            <li><a>My List</a></li>
            <li><a>Browse by language</a></li>
          </ul>
        </div>
        <div className='navbar-right'>
          <img src={search_icon} className='icons' alt=""></img>
          <p>Children</p>
          <img src={bell_icon} className='icons' alt=""></img>

          <div className='navbar-profile'>
            <img src={profile_img} className='profile' alt=""></img>
            <img src={caret_icon} className='' alt=""></img>
            <div className='dropdown'>
                <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Navbar