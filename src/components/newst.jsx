import Home from "./home";
import './index1.css';


const Addnewstudent =()=>{
    return(
        <div>
       <Home />
       <div className="box">
           <div className="boxitems">
           
           <fieldset> <legend>  Name  </legend> <input type="text" /></fieldset>
           </div>
           <div className="boxitems"><fieldset><legend>Age </legend> <input type="text" /></fieldset>
          </div>
           <div className="boxitems"><fieldset><legend>Course </legend> <input type="text" /></fieldset>
           </div>
           <div className="boxitems"><fieldset><legend>Batch </legend> <input type="text" /></fieldset>
            </div>
       </div>
       <button id="cancel">Cancel</button>
       <button id="update">Update</button>
   </div>
    )
}

export default Addnewstudent;