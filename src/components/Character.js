// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const Character = (props) =>{
const {name} = props;
return (
    <StyleDiv>
        <div>
            <div className='names'>
                 <h1>{name}</h1>
            </div>
           
            
        </div>
    </StyleDiv>
    
)

}

const StyleDiv = styled.div`
background-color: white;
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

`






export default Character;