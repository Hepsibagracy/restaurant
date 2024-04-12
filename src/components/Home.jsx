

import './Home.css'
import food from '../assets/indianfood.jpeg';
import { Link } from "react-router-dom";

function Home({cart,setCart}) {
    
   
    return (
        <>
        <div class="content">
    <div class="bgimage">
        <img src={food} alt="foodimage" width="100%"  height="500PX"/>
    </div>
    <div class="text">


        <h1>Enjoy your delicious meal</h1>
        <p className="p1">Good Food for Good Moments.</p>
        <p className="p1">It's not just Food, it's an Experience.</p>

      


        <div className="placeorder">
           <li><Link  to="/menu">PLACE YOUR ORDER</Link></li> 
           
        </div>
        




    </div>

</div>
       
            
           
            
        </>
    )
}

export default Home;