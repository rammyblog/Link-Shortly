import styled from 'styled-components';

export const StyledMobileMenu = styled.nav`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.primaryDarkViolet};
  height: 50vh;
  text-align: center;
  z-index: 9;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  border-radius: 6px;

  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    // display: none;
      
      width: 90%;
      padding-right: 11px;
      top: 73px;
      right: 50px;
      left: ${({ open }) => open ? '10px' : '-10px'};

  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;

  }

  .main-nav, .account-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-weight: 700
    display: flex;
    align-items: center;
    flex-direction: column
  
  }
 .nav-divider {
    border-top: 1px solid #fff;
    position: static;
    padding-left: 5px;
    width: 91%;
    margin: 0 auto;
  }

  .btn-info {
    width: 90%;
  }
  

  li {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
      width: 100%;
   
    }

    &:hover {
      color: ${({ theme }) => theme.secondaryHover};
    }
  }
`;


export const StyledMenu = styled.header`

nav{
	display: grid;
	grid-auto-flow: column; 
}

.main-nav, .account-nav {
	list-style: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	font-weight: 700

}

.main-nav li{
	float: left;

}

.account-nav li{
	float: right;
}

.main-nav{
	display: flex;
	gap: 20px;
	align-items: center;


}

.account-nav {
	gap: 26px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

@media (max-width: ${({ theme }) => theme.mobile}) {
  display: none
}




`;