import styled from 'styled-components';


export const IntroHeader = styled.div`

.intro {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-bottom: 100px;
}
.intro-image{
	width: 100%
}
.intro-image img{
	width: 100%
}

.intro-text > h1 {
	font-size: 50px;
	color: hsl(260, 8%, 14%);
	font-weight: 700
}

.intro-text h4{
	font-weight: 500;
	margin-bottom: 25px;
}

@media(max-width: ${({theme}) => theme.mobile}){

	
	.intro {
		grid-auto-flow: row;
		grid-template-columns: none;
		margin-bottom: 100px
	  }
	
	  .intro-text {
		order: 2;
	  }

	  .intro-text > h1 {
		font-size: 3rem;

	}
	

}

`;