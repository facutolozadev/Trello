import React, {useState, useContext} from 'react'
import {AddNewItemButton} from './AddNewItem';
import {NewItemInput} from './NewItemForm'
import styled from 'styled-components';
import {DataContext} from '../context/DataContext'
const NewColumnForm = ({setShowColumnForm}) => {

    const [inputText, setInputText] = useState("")

    const {inputRef, dispatch} = useContext(DataContext)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({
          type: 'ADD_LIST',
          title: inputText
        })

        setShowColumnForm(false)
    }
  return (
    <Container>
        <NewItemInput 
        required={true}
        minLength={1}
        autoFocus
        onChange={(e) => setInputText(e.target.value)} 
        dark={true} 
        ref={inputRef}
        /> 
        <AddNewItemButton onClick={handleSubmit} dark={true}>+ Add a new column</AddNewItemButton>
    </Container>
  )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
`;

export default NewColumnForm