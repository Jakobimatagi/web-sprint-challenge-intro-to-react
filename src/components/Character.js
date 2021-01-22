// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const Character = (props) =>{
const {name, height} = props;
return (
    <StyleDiv>
        <div>
            <h1>{name}</h1>
            <p>Height: {height}</p>
        </div>
    </StyleDiv>
    
)

}

const StyleDiv = styled.div`
background-color: lightgray;
width: 50%;
display: flex;
flex-direction: row;
justify-content: center;
margin: 0 auto;
margin-bottom: 10%;
height: 60vh;



h1{
    font-size: 3rem;
    font-family: papyrus;
    /* margin: 5%;
    padding: 5%; */
}
p{
    font-style: papyrus;
    font-size: 2rem;
    background-color: black;
    color: white;
    padding: 2%;
}

`






export default Character;