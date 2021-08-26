import React from 'react';
import { useBookDetailValue } from '../contexts/BooksDetailsAndCartUpdateProvider';
// import Cart from './Cart';
import CurrencyProduct from 'react-currency-format';
import './Subtotal.css'
import {getCartTotal} from '../reducer/reducer'

function Subtotal(props) {
    const[{cart}]= useBookDetailValue()
    return (
        <div className="subtotalContainer">
            <h2>Subtotal</h2>
            <div className="subtotalContainer__totalProducts">
                
                <CurrencyProduct
                renderText={(value)=>(
                    <>
                    <p className="total">Total ({cart?.length} items):  <strong>{`${value}`}</strong></p>
                    </>
                )} 
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator="true"
                prefix={"$"}/>
            </div>

            <button>Order The Products</button>
        </div>
    );
}
export default Subtotal;