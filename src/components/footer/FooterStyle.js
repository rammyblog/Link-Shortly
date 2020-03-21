import styled from 'styled-components';

export const FooterStyled = styled.footer`
    background-color: hsl(260, 8%, 14%);
	color: #fff;
    padding: 5rem;
    
.footer-links p{
	font-weight: 700
}
.footer-links ul, .social-media ul{
	margin: 0;
	padding: 0;
	overflow: hidden;
}


.footer-links li {
	padding: 10px 0;
	color: hsl(0, 0%, 75%);
	font-size: 12px;
	font-weight: 700;
}

.footer-links li, .social-media li{
	list-style: none;
}

.social-media li{
	float: left;
	padding: 8px;
}

svg {
  fill: #fff;
}

.footer-grid{
	display: grid;
	grid-template-columns: 2fr 1.5fr 1fr 1fr 1.5fr;
	gap: 30px 
}


@media (max-width: ${({ theme }) => theme.mobile}) {

    .footer-grid {
        grid-template-columns: none;
    
        text-align: center;
      }
      .social-media ul {
        justify-content: center;
        align-items: center;
        display: flex;
      }
  }


`;