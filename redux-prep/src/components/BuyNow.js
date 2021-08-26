import React, { useContext } from 'react';
import { BooksDataContext } from '../contexts/BooksDataContext';
import {Link} from 'react-router-dom'
import { useBookDetailValue } from '../contexts/BooksDetailsAndCartUpdateProvider';
import './BuyNow.css'
function BuyNow(props) {

    // const {bookDetail} = useContext(BooksDataContext)
    const [{ }, dispatch] = useBookDetailValue();
    const [{ buynow }] = useBookDetailValue()
    console.log(buynow)
    const addToCart = () => {
        //Add item to the cart
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: buynow[0].id,
                title: buynow[0].title,
                img: buynow[0].img,
                price: buynow[0].price,
                language: buynow[0].language
            }
        })
    }
    return (
        <div className="buyNowContainer">
            {
                buynow.length === 0 ? <div><h6>go back to home page<Link to="/">Home</Link></h6></div> :
                    <>
                        <div className="buyNowContainer__bookContainer">
                            <img src={buynow[0].img} alt="img" />
                            <div className="bookData__bookData">
                                <h1>{buynow[0].title}</h1>
                                <p>{buynow[0].price}</p>
                                <p><span>Language: </span>{buynow[0].language}</p>
                            </div>
                        </div>
                        <div className="buyNowContainer__buttons">
                            <button className="buttons__buyNow buttons">Buy Now</button>
                            <button onClick={addToCart} className="buttons__wishList buttons"> + Cart</button>
                        </div>
                    </>
            }

        </div>
    );
}

export default BuyNow;