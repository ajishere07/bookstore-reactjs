// setup data layer

// we need this to track the basket

import React, {createContext, useContext, useReducer} from 'react'


// this is data layer
export const BooksDetailsContext = createContext()

//provider

export const BookDetailProvider = ({reducer, initialState, children})=>(
    <BooksDetailsContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </BooksDetailsContext.Provider>
)

export const useBookDetailValue = () => useContext(BooksDetailsContext)

