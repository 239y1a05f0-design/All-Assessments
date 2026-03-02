// import About from "../About/About";
// import Contact from "../Contact/Contact";
import Books from "../Books/Books";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./Link.css";
import Register from "../Register/Register";

function Link(){
    return(
        <>
        <Routes>
            {/* <Route path="/" element={<Login/>}/> */}
            <Route path="/Home" element={<Home/>}/>
            <Route path="/books" element={<Books />} />
             <Route path="/cart" element={<Cart />} />
             {/* <Route path="/About" element={<About/>}/> */}
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Register" element={<Register/>}/>
        </Routes>
        </>
    )
}
export default Link;

