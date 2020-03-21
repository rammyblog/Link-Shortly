import styled from 'styled-components';

export const StyledMobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.neutralGrayishViolet};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  z-index: 9;

  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    // display: none;

  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;

  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDarkViolet};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
   
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
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