import '../components/Head.css';

import {Link} from "react-router-dom"
function  Head({cart}){
    return(
        <>
        <div className="navbar">
        <div className="logo">Food Junction</div>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/menu"}>Menu</Link></li>
            <li><Link to={"/Cart"}>View Cart</Link></li><span className='cart-count'>{cart.length}</span>
            
        </ul>
        </div>
        
        </>
    )
}


export default Head;