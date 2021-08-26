import './App.css';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Cart from './components/Cart'
import Home from './components/Home'
import BooksDataContextProvider from './contexts/BooksDataContext';
import BuyNow from './components/BuyNow';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App">

      <BooksDataContextProvider >
        <NavBar />
        <Route path="/" exact><Home /></Route>
        <Route path="/Cart"><Cart /></Route>
        <Route path="/BuyNow"><BuyNow/></Route>
        <Footer/>
      </BooksDataContextProvider>

      {/* <BookList/> */}
    </div>
  );
}

export default App;
