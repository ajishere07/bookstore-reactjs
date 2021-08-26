import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const BooksDataContext = createContext()

function BooksDataContextProvider(props) {
    
    const [books, setBooks] = useState([])
        // this state is provides the book data for Home Component

    useEffect(() => {
        axios.get('https://api.itbook.store/1.0/new').then(res => {
            
            setBooks(res.data.books)
          } 
        )
        
    }, [])

    // const buyNow = (id) =>{
    //     axios.get(`https://api.itbook.store/1.0/books/${id}`).then(res=>{
    //         // setBookDetail(res.data)
    //         // console.log(res.data)
    //     })
    // }
    return (
        <BooksDataContext.Provider value={{ books }}>
            {props.children}
        </BooksDataContext.Provider>
    );
}

export default BooksDataContextProvider;