
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Routes,Route,Link,Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen';
// import Pizza from './components/Pizza';
import  Cartscreen  from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Vegscreen from './screens/vegscreen';
import Nonvegscreen from './screens/nonvegscreen';
import Orderscreen from './screens/Orderscreen';
import AdminScreen from './screens/Adminscreen';
import Userslist from './screens/Userlist'
import Pizzaslist from './screens/Pizzalist'
import Addnewpizza from './screens/Addpizza'
import OrderList from './screens/Orderlist'
import EditPizza from './screens/Editpizza';
import SearchPizzaScreen from './screens/SearchPizzaScreen';
// import { Search } from './components/search_filter';
function App() {
  return (
    <div className="App">
       
       <Navbar/>
       <Router>
         <Routes>
        <Route path="/cart" element={<Cartscreen/>}/>
        <Route path="/Register" element={<Registerscreen/>}/>
        <Route path="/Login" element={<Loginscreen/>}/>
        <Route path="/" element={<Homescreen/>}>
        </Route>
          <Route path="/search" element={<SearchPizzaScreen/>}/>
          <Route path="/veg" element={<Vegscreen/>}/>
          <Route path="/nonveg" element={<Nonvegscreen/>}/>
        <Route path="/orders" element={<Orderscreen/>}/>
        <Route path="/admin" element={<AdminScreen/>}>
           <Route path="/admin" element={<Userslist/>}/>
           <Route path="/admin/userlist" element={<Userslist/>}/>
           <Route path="/admin/pizzalist" element={<Pizzaslist/>}/>
           <Route path="/admin/addnewpizza" element={<Addnewpizza/>}/>
           <Route path="/admin/orderlist" element={<OrderList/>}/>
           <Route path="/admin/editpizza/:pizzaid" element={<EditPizza/>}/>
        </Route>
        </Routes>
       </Router>
      
    </div>
  );
}

export default App;
