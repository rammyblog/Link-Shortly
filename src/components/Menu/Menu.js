import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu, StyledMobileMenu } from './Menu.styled';
import logo from '../../assets/images/logo.svg'
export default function MenuComponent({ open }) {
  return (
    <>
      <img class='mobile-image' src={logo} /> 

        <StyledMenu>
          <nav>

            <ul class="main-nav">
              <li><img src={logo} /> </li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>

            <ul class="account-nav">
              <li>Login</li>
              <li><button class="btn btn-info">Sign Up</button></li>
            </ul>
          </nav>

        </StyledMenu>
      <StyledMobileMenu open={open}>

        <ul class="main-nav">
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
            <hr className='nav-divider' />
            <ul class="account-nav">
              <li>Login</li>
              <li><button class="btn btn-info">Sign Up</button></li>
            </ul>

      </StyledMobileMenu>
    </>
  );
}



MenuComponent.propTypes = {
  open: bool.isRequired
};
