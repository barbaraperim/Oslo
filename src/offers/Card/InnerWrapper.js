
import styled from 'styled-components';

export const InnerWrapper = styled.div`
width: 447px;
height: 664px;
background: ${props => props.selected? "#00BFD0 0% 0% no-repeat padding-box;": "#FFFFFF 0% 0% no-repeat padding-box;"}
box-shadow: 7px 5px 10px #00000029;
border-radius: 43px;
margin-top:60px;
padding-top:50px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
`