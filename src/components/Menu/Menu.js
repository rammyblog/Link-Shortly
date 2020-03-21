import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu, StyledMobileMenu } from './Menu.styled';
import logo from '../../assets/images/logo.svg'
export default function MenuComponent({ open }) {
  return (
    <>
      
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
        <a href="/">
          <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
          About us
      </a>
        <a href="/">
          <span role="img" aria-label="price">&#x1f4b8;</span>
          Pricing
        </a>
        <a href="/">
          <span role="img" aria-label="contact">&#x1f4e9;</span>
          Contact
        </a>

      </StyledMobileMenu>
    </>
  );
}



MenuComponent.propTypes = {
  open: bool.isRequired
};
