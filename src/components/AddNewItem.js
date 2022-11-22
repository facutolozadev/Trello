import React, { useState } from 'react'
import styled from 'styled-components';
import NewItemForm from './NewItemForm';



const AddNewItem = ({id}) => {
    
    const [showForm, setShowForm] = useState(false)
    
    if(showForm){
        return (
            <NewItemForm id={id} setShowForm={setShowForm}/>
        )
    }
 
    return (
    <AddNewItemButton onClick={() => setShowForm(true)}>
        Add
    </AddNewItemButton>
  )
}

export const AddNewItemButton = styled.button`
    background-color: ${props => props.dark ? "rgba(0,0,0,.6)" : "#2EC923"};
    padding: 10px 20px;
    min-width: ${props => props.dark ? "200px" : "0"};
    border: none;
    margin-top: ${props => props.dark ? "0" : "20px"};
    color: #fff;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
  
    &:hover{
        background-color: ${props => props.dark ? "rgba(0,0,0,.8)" : "#2EC965"}
    }
`;



export default AddNewItem