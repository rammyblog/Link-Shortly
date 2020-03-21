import styled from 'styled-components';
import shortenBoxBackgroundLogo from '../../assets/images/bg-shorten-desktop.svg';


export const ShortenBoxInput = styled.div`


	display: flex;
	align-items: center;
	justify-content: center;

.shorten-box {
	width: auto;
	height: auto;
	background-color: ${({ theme }) => theme.neutralDarkBlue} ; /* very Dark blue */
	background-image: url(${shortenBoxBackgroundLogo});
	position: absolute;
	width: 71.7%;
	top: 90%;
	border-radius: 10px;
	/* bottom: 10px; */
}
.input-box {
	display: flex;
	padding: 45px 60px;
	gap: 11px;
}

.input-box input{
	display: block;
	width: 100%;
	border: 1px solid #ccc;
	font-size: 1rem;
	color: #495057;
	padding: .375rem .75rem;
	border-radius: .25rem;
	font-family: 'Poppins', sans-serif;
}

@media(max-width: ${({theme}) => theme.mobile}){

	.intro {
		grid-auto-flow: row;
		grid-template-columns: none;
	  }
	
	  .intro-text {
		order: 2;
	  }
	
	  .shorten-box {
		top: 95%;
	  }
	
	.input-box input{
		  width: auto
	  }
	
	  .input-box {
		display: flex;
		padding: 19px 60px;
		gap: 11px;
		/* width: 32%; */
		flex-direction: column;
		text-align: center;
	  }
}
`;