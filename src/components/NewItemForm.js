import React, {useState,useContext} from 'react'
import styled from 'styled-components'
import {AddNewItemButton} from './AddNewItem'
import {DataContext} from '../context/DataContext'
import {nanoid}from 'nanoid'

const NewItemForm = ({setShowForm, id}) => {

  const [inputCardText, setInputCardText] = useState("")
  
  const {state, dispatch} = useContext(DataContext)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TASK',
      payload: {inputCardText, listId: id}
    })

    setShowForm(false)
  }

  return (
    <>
        <NewItemInput 
        onChange={(e) => setInputCardText(e.target.value)}
        autoFocus/>
        <AddNewItemButton onClick={handleSubmit}>Create</AddNewItemButton>
    </>
  )
}

export const NewItemInput = styled.input`
    margin-top: ${props => props.dark ? "0px" : "20px"};
    padding: 7px;
    width: ${props=> props.dark ? "250px": "100%"}; 
`;





export default NewItemForm