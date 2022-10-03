import './index1.css';
import Home from './home';
import { Link } from 'react-router-dom';


const Student=()=>

{
    return(
        <div >
         <Home />
       <span>STUDENT DETAILS:</span>
       <Link to="./newst/"><button id="new">Add New Student</button></Link>
       <center>
      <div id="tp" >
      <table  width="100%">
            <tr>
                <th>NAME</th>
                <th>AGE</th>
                <th>Course's</th>
                <th>BATCH</th>
                <th>CHANGE</th>

            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td> <Link to="./newst/">Edit</Link> </td>
            </tr>
        </table>
      </div>
       </center>

        </div>
    )
}

export default Student;