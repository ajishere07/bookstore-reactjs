import React, { useContext } from 'react';
import { BooksDataContext } from '../contexts/BooksDataContext';
import { useBookDetailValue } from '../contexts/BooksDetailsAndCartUpdateProvider';

import './CartBookContainer.css'

function CartBookContainer({id,img,title,price,language}) {

    const[{},dispatch] = useBookDetailValue();

    // const {counterDecrement,cartItemCounter} = useContext(BooksDataContext)
    console.log(id)
    const removeFromCart = () =>{
          dispatch({
              type:'REMOVE_FROM_CART',
              id: id,
          })
    }
    return (
        <div className="cartBookContainer">
            <img src={img} alt="img"/>
            <div className="cartBookContainer__bookData">
                <h4>{title}</h4>
                <p>{price}</p>
                <p><span>Language: </span>{language}</p>
            </div>
            <div className="cartBookContainer__buttons">
                <button onClick={removeFromCart} className="button__removeFromCart"> - Cart</button>
            </div>
            
        </div>
    );
}

export default CartBookContainer;