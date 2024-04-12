import { useState } from "react";
import data from "../assets/products.json"
import Product from "./Product";
import './Home.css'


function Menu({cart,setCart}) {
    
    const [products] = useState(data);
    return (
        <>
        
            
           
            <div className="product-container">
                {products.map((product) => {
                    return (
                        <Product key={product.id} product={product} cart={cart}  setCart={setCart} />

                    )


                })}
            </div>
        </>
    )
}

export default Menu;