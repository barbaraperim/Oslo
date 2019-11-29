import styled from 'styled-components';

export const Button = styled.div`
width: 257px;
height: 65px;
background: ${props=> props.selected? "#FFFFFF 0% 0% no-repeat padding-box;": "#00A9C0 0% 0% no-repeat padding-box;"}
border-radius: 20px;
text-align:center;
line-height:65px;
font-weight:bold;
color: ${props=> props.selected? "#00BFD0":"#FFFFFF"}
margin-bottom:49px;
cursor:pointer;
`