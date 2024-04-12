import { cartContext } from '../App'
import './product.css';
import { useContext } from 'react';


function Product({ product}) {
    const {cart,setCart}=useContext(cartContext)

    const name = product.name.length > 21 ? product.name.substring(0, 20) + ".." : product.name

    const addCart = () => {
        setCart([...cart, product]);//spread operator

    }
    const removeCart = () => {
        setCart(cart.filter((c) => c.id !== product.id)); //array filter
    }

    return (

        <>
            <div className="product">
                <div className="img">
                    <img src={product.pic} alt="{product.name}" />
                </div>
                <div className="details">
                    <h3>{name}</h3>
                    <p>Price Rs.{product.amt}</p>
                    {cart.includes(product) ? (
                        <button className='btnremove' onClick={removeCart}>Remove From Cart</button>
                    ) : (
                        <button onClick={addCart}>Add to Cart</button>
                    )}

                </div>

            </div>

        </>
    )
}
export default Product;