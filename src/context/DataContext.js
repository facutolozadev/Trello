import {createContext} from 'react';
import React, { useState, useReducer, useRef } from 'react'
import {nanoid} from 'nanoid'
import {findItemIndexById, overrideItemAtIndex, moveItem} from '../utils/arrayUtils'


export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    
    const [showColumnForm, setShowColumnForm] = useState(false)
    
    


    const appData = {
        lists: [
           
        ]

    }

    const appStateReducer = (state, action, source, sourceColumn, sourceItems) => {
        switch(action.type) {
            case "ADD_LIST":
                return {
                    ...state,
                    lists: [
                        ...state.lists,
                        {
                            id: nanoid(),
                            title:action.title,
                            tasks: []
                        }
                    ]
                }
            case "ADD_TASK": 
            const targetListIndex = findItemIndexById(
                state.lists,
                action.payload.listId
            )
            
            const targetList = state.lists[targetListIndex]

            const updatedTargetList = {
                ...targetList,
                tasks: [ 
                    ...targetList.tasks,
                    {id: nanoid(), title: action.payload.inputCardText}
                ]
            }

            return{
                ...state,
                lists: overrideItemAtIndex(
                    state.lists,
                    updatedTargetList,
                    targetListIndex
                )   

            }

            default: {
                return state
            }
        }
    }

    const [state, dispatch] = useReducer(appStateReducer, appData)
   

    return(
        <DataContext.Provider value={{
            showColumnForm,
            setShowColumnForm,
            state,
            dispatch}}>
                { children }
        </DataContext.Provider>
    )
}