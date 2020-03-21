import styled from 'styled-components';
import BoostLogo from '../../assets/images/bg-boost-desktop.svg';


export const BoostLinksStyled = styled.div `
.boost-links {
	background-color: hsl(255, 11%, 22%);
	background-image: url(${BoostLogo});
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 5rem;
	color: #fff;
	background-repeat: no-repeat;
	background-size: cover;
}

.boost-links-content h2{
	margin-bottom: 20px;
	font-weight: 700;
	font-size: 1.8rem;
}


`