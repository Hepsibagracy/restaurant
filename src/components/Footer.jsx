import './Footer.css';

function Footer(){
    return(
        <>
        <div>
        <footer/>
        <div className="fcontainer">
            <div className="row">
                <div className="foot-col">
                    <h4> Browse our Website</h4>
                    <ul>
                        <li><a className="sub" href="a.html">Home</a> </li>
                        <li><a className="sub" href="watches.html">Menu</a> </li>
                        <li><a className="sub" href="prayer.html">View Cart</a> </li>
                        
                    </ul>
                </div>
            </div>
            <div className="foot-col ">
                <h4>Conatct Information</h4>
                <div className="info">
                    <i className='bx bxs-phone'>
                        <h>81245645125</h>
                    </i>
                    <br/>

                    <i className='bx bx-envelope'>
                        <h>info@foodjunction.in</h>
                    </i>
                    <br/>
                    <i className='bx bxs-map'>
                        <h>#1,Hennur Cross,<br/> Bangalore-560084</h>
                    </i>
                    <br/>
                </div>
            </div>



           

        </div>
       

      
  
        </div>
        </>
    )
}
export default Footer;