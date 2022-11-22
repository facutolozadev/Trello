import {AppContainer} from './styles'
import {AddNewItemButton} from './components/AddNewItem'
import React, { useContext } from 'react';
import { DataContext } from './context/DataContext'
import NewColumnForm from './components/NewColumnForm';
import Column from './components/Column';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {nanoid} from "nanoid"

function App() {
  
  const {showColumnForm, setShowColumnForm, state} = useContext(DataContext)
  
 
  const onDragEnd = (result) => {
      const {
        destination, destination: {droppableId : destdroppableId, index: destIndex}, 
        source, source: {droppableId: sourcedroppableId, index: sourceIndex}, 
        draggableId, type} = result
    

      if(!destination){
        return;
      }

      if(type === "list"){
        const [removedList] = state.lists.splice(sourceIndex, 1)
        state.lists.splice(destination.index, 0, removedList)
       
      }

      const sourceList = state.lists.find(list => list.id === sourcedroppableId)
      const destinationList = state.lists.find(list => list.id === destdroppableId)
    
      try{
        if(sourcedroppableId === destdroppableId){
          const [removed] = sourceList.tasks.splice(sourceIndex, 1)
          destinationList.tasks.splice(destIndex, 0, removed)
          return;
        } else {
          const [removed] = sourceList.tasks.splice(sourceIndex, 1)
          destinationList.tasks.splice(destIndex, 0, removed)
        }
      } catch (error) {
        if(error instanceof TypeError){
          return null;
        }
      }
    }
    
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={nanoid()} type="list" direction="horizontal">
          {
            (provided)=>(
                  <AppContainer ref={provided.innerRef} {...provided.droppableProps}>
              {
                state.lists.map((list, i) => (
                  <Column id={list.id} title={list.title} key={list.id} index={i}  /> 
                ))
              }
      
                {
                  showColumnForm ? (
                    <NewColumnForm setShowColumnForm={setShowColumnForm}/>
                  ) : (
                    <AddNewItemButton onClick={()=>setShowColumnForm(true)} dark={true}>+ Add a new column</AddNewItemButton>
                  )
                }
                {provided.placeholder}
              </AppContainer>
            )
          }
         
           </Droppable>
       </DragDropContext>
      
     );
   }

  

  

export default App;
