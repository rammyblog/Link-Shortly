// global.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
	border: 0;

	margin: 0
}

body{
	font-size: 18px;
	color: hsl(257, 7%, 63%);
    font-family: 'Poppins', sans-serif;


}

.btn {
	padding: 7px 12px;
	font-size: 18px;
	white-space: nowrap;
	border-radius: 18px;
	margin-bottom: 0;
	display: inline-block;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	font-family: 'Poppins', sans-serif;
	font-weight: 900
}
.btn-info{
	background-color: hsl(180, 66%, 49%);
	color: #fff;
	font-size: 18px;
	font-weight: 700
}
.btn-info:hover {
	background-color: ${({ theme }) => theme.secondaryHover};
  }

.btn-short{
	border-radius: 6px;
	font-weight: 700;
}

.wrapper{
	position: relative;
	margin-top: 4rem;
}



  `;