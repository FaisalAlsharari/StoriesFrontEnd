
import React from 'react'
import { Link, Route } from 'react-router-dom'
import SignUp from '../../src/auth/components/SignUp'
import SignIn from '../../src/auth/components/SignIn'
import SignOut from '../../src/auth/components/SignOut'
import './Header.scss'


//Here will show up anythings after you sign-in in the nave bar
const authenticatedOptions = (
  <React.Fragment>
    {/* <Link to="/change-password">Change Password</Link> */}
    <Link to="/sign-out"><button class="btn btn-primary " id="sinOut">Sign Out</button></Link>
    <Link to="/newStory"><button className="btn btn-primary m-3">New Story !</button></Link>
  </React.Fragment>
)

//Here will show up anythings before you sign-in in the nave bar 
const unauthenticatedOptions = (
  <div>
    <Link to="/sign-in"><button class="btn btn-primary" id="sinIn">Sign In</button></Link>


   </div>
)

const alwaysOptions = (
  <React.Fragment>
    {/* <Link to="/">Home</Link> */}
  </React.Fragment>
)

const Header = ({ user }) => (
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                     <div class="container">
                   <Link to="/stories"><button class="btn btn-primary marg">View Stories</button></Link>
                       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                       </button>
                       <div class="collapse navbar-collapse" id="navbarResponsive">
                       </div>
                      <Link to="/"><button class="btn btn-primary" id="home">Home</button></Link>
                      
                    
                   {/* { user && <span>Welcome, {user.username}</span>} */}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
                     </div>
                   </nav>
    
  </header>
)

export default Header