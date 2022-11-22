import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import AddNewItem, {AddNewItemButton} from './AddNewItem';
import {DataContext} from '../context/DataContext'
import Card from './Card';
import {Droppable, Draggable} from 'react-beautiful-dnd'
import {nanoid} from 'nanoid'
import {NewItemInput} from './NewItemForm';


const Column = ({title, index, id}) => {


 const {state, dispatch} = useContext(DataContext)




  return (
    <Draggable draggableId={id} index={index}>
      {
        (provided) => (
          <ColumnContainer  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                  <ColumnTitle>{title}</ColumnTitle>
              <Droppable droppableId={id}>
                {
                  (provided) => (
                    <div ref={provided.innerRef}
                    {...provided.droppableProps}>
                          {
                      state.lists[index].tasks.map((task, i) => (
                        <Card key={task.id} title={task.title} id={task.id} index={i}/> 
                      ))
                    }
                    {provided.placeholder}
                    </div>
                  )
                }
                
              </Droppable>
              <AddNewItem id={id}/>
          </ColumnContainer> 
        )
      }
      
    </Draggable>
  )
}


const ColumnContainer = styled.div`
    background-color: #ebecf0;
    min-width: 300px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 3px;
    padding: 8px 8px;
    flex-grow: 0;
`;

const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`;

const ChangeTitleContainer = styled.div`
  display: flex;
  column-gap: 2rem;
`;

const InputChange = styled.input`
    margin-top:  20px;
    padding: 7px;
    width:  50%;

`
export default Column