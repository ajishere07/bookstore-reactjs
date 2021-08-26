import React from 'react';
import './Home.css'
import BookList from './BookList';

function Home(props) {
    return (
        <div className="homeContainer">
          <div className="homeContainer__leftSide"> 
            <BookList/>
          </div>
          
        </div>
    );
}

export default Home;