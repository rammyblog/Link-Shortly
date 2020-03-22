import styled from 'styled-components';


export const ShortenedUrlStyles = styled.div`
.urlshort-link-box {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	/*position: absolute;*/
	/*top: 150%;*/
	/*margin-bottom: 34rem;*/
	background-color: #fff;
	width: -moz-available;
	margin-top: 1rem;
	padding: 10px 30px;
	border-radius: 6px;
	/* padding-bottom: 85%; */
}


.inline-hr{
    display: none
}

.long-link-box a{
	color: ${({ theme }) => theme.primaryDarkViolet};
	text-decoration: none;
}


 .short-link-box a {
	color: hsl(180,66%,49%);
	text-decoration: none;
	padding-right: 13px;
}

@media(max-width: ${({ theme }) => theme.mobile}){

    .urlshort-link-box {
        flex-direction: column;
        align-items: flex-start;
    }
    .long-link-box{
       border-bottom : 1px solid ${({ theme }) => theme.neutralGray}; 
       padding-bottom: 1rem;
       width: 100%
    }

    
    .short-link-box{
        padding-bottom: 1rem
     }
    
     .btn-info {
        text-align: center;
        width: 100%;
        margin-top: 15px;
        border-radius: 5px;
    }


	  }
	
	


`;