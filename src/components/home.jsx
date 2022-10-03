import './index1.css'
import { Link } from 'react-router-dom';
const Home=()=>
{
    return(
       <header>
         <div id="container">
        <Link to="./"><div id="items"> HOME</div></Link>
         <Link to="./student"><div id="items"> STUDENTS</div></Link>
        <Link to="./contactus"><div id="items">CONTACT US</div></Link>

        </div>
       
       </header>
    )
}

export default Home;