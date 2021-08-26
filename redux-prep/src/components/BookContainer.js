import { common } from '@material-ui/core/colors';
import axios from 'axios';
import React, { useContext, } from 'react';
import { useHistory } from 'react-router-dom';
import { BooksDataContext } from '../contexts/BooksDataContext';
import { useBookDetailValue } from '../contexts/BooksDetailsAndCartUpdateProvider';
import './BookContainer.css'


function BookContainer({ title, price, img, language, id }) {
    const history = useHistory();
    function handleClick() {
        history.push("/BuyNow");
    }
    const [{ }, dispatch] = useBookDetailValue();

    const buynow = (id) => {

        //api

        axios.get(`https://api.itbook.store/1.0/books/${id}`).then(res=>{
            console.log(res.data)
        })
        // alert("pressed")
        dispatch({
            type: 'BUY_NOW',
            itemmm: {
                id: id,
                title: title,
                img: img,
                price: price,
                language: language
            }

        })
    }
    const addToCart = () => {
        //Add item to the cart
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                img: img,
                price: price,
                language: language
            }
        })
    }
    return (
        <div>
            <div className="bookContainer">
                <img src={img} alt="img" />
                <div className="bookContainer__bookData">
                    <h4>{title}</h4>
                    <p>{price}</p>
                    <p><span>Language: </span>{language}</p>
                </div>
                <div className="bookContainer__buttons">

                    <button onClick={()=>{buynow(id);handleClick()}} className="buttons__buyNow buttons">Buy Now</button>

                    <button onClick={addToCart} className="buttons__wishList buttons"> + Cart</button>
                </div>
            </div>
        </div>
    );
}

export default BookContainer;