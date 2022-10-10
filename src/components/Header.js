import React from 'react'
import {Link } from 'react-router-dom'
import './style/Header.css'



function Header(props) {
    // const [width,setWidth]=useState(window.innerWidth)
    // const Resize=()=>{setWidth(window.innerWidth)}
    // useEffect(()=>{ window.addEventListener('resize', ()=>{ Resize() } ) })
   return (
    <div>
        <nav style={props.style}>
           <h1> Questions</h1>
           <ul>
           <Link to={`/`}><li>Home</li></Link>
           <Link to={`/about`}><li>About</li></Link>
           <Link to={`/blog`}><li>Blog</li></Link>
             
           </ul>
           
        </nav>
     </div>
  )
}

export default Header

