import styled from 'styled-components';

export const Button = styled.div`
width: 257px;
height: 65px;
background-image:url("${props=> props.iconWait}");
background-repeat: no-repeat;
background-position: center;
background-color:${props=> props.selected? "#FFFFFF": "#00A9C0"}
border-radius: 20px;
text-align:center;
line-height:65px;
font-weight:bold;
color: ${props=> props.selected? "#00BFD0":"#FFFFFF"}
margin-bottom:49px;
cursor:pointer;
margin-top:45px;
`