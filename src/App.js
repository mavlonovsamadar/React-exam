import { useState } from "react";
import NavbarCard from "./components/Navbar";
import SectionCard from "./components/SectionCard";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import CreateData from "./components/CreateData/CreateData";
import TableList from "./components/TableList/TableList";
import EditPage from "./components/EditPage/EditPage";


function App() {
const [ cart, setCart] = useState([])
  
const handleClick = (item) => {
if(cart.indexOf(item) !== -1) return alert("Card is added");
setCart([...cart, item])
}

const handleChange = (item, add) => {
const index = cart.indexOf(item)
const arr = cart
arr[index].amount += add;
if(arr[index].amount === 0) arr[index].amount=1;
setCart([...arr])
}

  return (
    <>
    <Router>
     <NavbarCard size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange}/>
      <Routes>
<Route path="/home" element={<SectionCard handleClick={handleClick}/>} />
<Route path="/create" element={<CreateData />} />
<Route path="/table" element={<TableList/>} />
<Route path="/table/edit/:id" element={<EditPage/>} />
</Routes>
 
    </Router>


    
    </>
  );
}

export default App;
