import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      // <>
        <div className='nav-right'>
          <NavLink to="/upload">Upload Image</NavLink>
          <ProfileButton user={sessionUser} />
        </div>
      // </>
    );
  } else {
    sessionLinks = (
      <>
        <div className='nav-right'>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div id='nav-body'>
      {/* <ul>
        <li> */}
          <div id='nav-left'>
            <NavLink exact to="/">Home</NavLink>
          </div>
          <div id='nav-right'>
            {isLoaded && sessionLinks}
          </div>
        {/* </li>
      </ul> */}
    </div>
  );
}

export default Navigation;
