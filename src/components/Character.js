// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const Character = (props) =>{
const {name} = props;
return (
    <StyleDiv>
        <div>
            <h1>{name}</h1>
            
        </div>
    </StyleDiv>
    
)

}

const StyleDiv = styled.div`
background-color: white;
width: 50%;
display: flex;
flex-direction: row;
justify-content: flex-start;
margin-left: 25%;
height: 60vh;

h1{
    font-size: 3rem;
    
    margin: 5%;
    padding: 5%;
}

`






export default Character;