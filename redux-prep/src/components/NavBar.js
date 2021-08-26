import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext } from 'react';
import { BooksDataContext } from '../contexts/BooksDataContext';
import { useBookDetailValue } from '../contexts/BooksDetailsAndCartUpdateProvider';
// import reducer,{initialState} from '../reducer/reducer';

function NavBar(props) {
    const[{cart}] = useBookDetailValue()

    // console.log(cart)

    // const { cartItemCounter } = useContext(BooksDataContext)

    return (
        <div className="containerN">
            <nav className="navBar">

                <div className="navBar__logo">
                    <Link to="/" style={{textDecoration:"none"}}>
                        <h2><span>B</span>ookify</h2>
                    </Link>
                </div>


                <div className="navBar__searchBox">
                    <input type="text" placeholder="Enter the name of the book" />
                    <span className="navBar__searchBoxIcon"><SearchIcon /></span>
                </div>

                <div className="navBar__rightSide">
                    {/* <div className="signupOption">
                        <h4>Sign up</h4>
                    </div> */}
                    <Link to="/Cart" style={{textDecoration:"none"}}>
                    <div className="navBar__cart">
                        <span>{cart?.length}</span>
                        <ShoppingCartIcon style={{ color: "white", fontSize: 40 }} />
                    </div>
                    </Link>

                </div>
            </nav>
            <div className="navBar__searchBoxForMobile navBar">
                <div className="navBar__searchBoxMobile">
                    <input type="text" placeholder="Enter the name of the book" />
                    <span className="navBar__searchBoxIcon"><SearchIcon /></span>
                </div>
            </div>
        </div>
    );
}

export default NavBar;