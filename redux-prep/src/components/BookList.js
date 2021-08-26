import React, { useContext } from 'react';
import { BooksDataContext } from '../contexts/BooksDataContext';
import BookContainer from './BookContainer';

function BookList(props) {

    // data consuming from the BooksDataContext ---------------------------------------

    const { books } = useContext(BooksDataContext)
    // console.log(details)

    // data consuming from the BooksDataContext ---------------------------------------
    // console.log(books[0].isbn13)
    // console.log("kud")

    return (
        <div className="bookList">
            {
                books.map((book) =>
                    <BookContainer
                        key={book.isbn13}
                        id={book.isbn13}
                        title={book.title}
                        img={book.image}
                        price={book.price}
                        language="English" />
                )
            }
        </div>
    );
}

export default BookList;