import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/home";
import Student from "./components/student";
import Addnewstudent from "./components/newst";
import Contact from "./components/contact";
import "./components/index1.css"


function App() {
  return( 
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
  
      
      <Route path="/contact/" element={<Contact />} />
      <Route path="/student/" element={<Student />}/>
      <Route path="/student/newst" element={<Addnewstudent />}/>
      
    </Routes>
    </BrowserRouter>

    
    </div>
  )
}

export default App;