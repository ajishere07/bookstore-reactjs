import React from 'react';
import './Cart.css'
import CartBookContainer from './CartBookContainer';
// import { BooksDataContext } from '../contexts/BooksDataContext';
import Subtotal from './Subtotal'
import { useBookDetailValue } from '../contexts/BooksDetailsAndCartUpdateProvider';

function Cart() {

    const [{ cart }] = useBookDetailValue()
    
    return (
        <div className="cartContainer">
            <div className="cartContainer__leftSide">
                <div className="leftSide__addBanner">
                    <img src="https://source.unsplash.com/808x200/?books,library" alt="img" />
                </div>
                {/* <div>{cart.isbn13}</div> */}

                {
                    cart?.length === 0 ? (
                        <div className="leftSide__cartItems">
                            <h2>No Items in your cart</h2>
                            <p>You have nothing in your cart, To add something click "+ cart" button next to the item</p>
                        </div>
                    ) :
                        (
                            <div className="leftSide__cartItems">
                                <h1>Items in the Cart</h1>
                                {
                                    cart?.map((item) =>
                                        <CartBookContainer
                                            key={item.id}
                                            id={item.id}
                                            img={item.img}
                                            price={item.price}
                                            title={item.title}
                                            language="English"
                                        />
                                    )
                                }
                            </div>
                        )
                }


            </div>
            {
            cart?.length === 0 ?
             (
                <div className="cartContainer__rightSide">
                    <h1>Subtotal</h1>
                    <p>Nothing in the cart</p>
                </div>
            ) : (
                <div className="cartContainer__rightSide">
                    <Subtotal/>
                </div>
            )
        }


        </div>
    );
}

export default Cart;