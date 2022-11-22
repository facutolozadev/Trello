import React from 'react'
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';


const Card = ({title, id, index}) => {
  return (
    <Draggable  draggableId={id} index={index}>
      {(provided) => (
          <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
         >
            <p>{title}</p>
          </CardContainer>
      )}
    </Draggable>
  )
}

const CardContainer = styled.div`
    background-color: #fff;
    box-shadow: #091e4240 0px 2px 3px 0px;
    cursor: pointer;
    min-height: 47px;
    max-width: 300px;
    padding: 0.5rem 1rem;
    font-size: 14px;
    margin-top: 15px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
`;

export default Card