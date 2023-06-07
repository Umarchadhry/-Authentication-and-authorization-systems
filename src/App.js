import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import { Route,Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Protected from "./Protected";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import EmployeeList from './components/EmployeeList';
import EmployeeContextProvider from './contexts/EmployeeContext';
import PageNotFound from "./PageNotFound";

function App() {
    
        return <>
        
            <Routes> 
                <Route exact path="/" Component={Welcome}/>
                <Route path="/login" Component={Login}></Route>
                <Route path="/homepage" element={
                    
                <Protected>
                <div className="container">                   
                <header className="header">
                <Navbar/>
                
                <div className="container-xl">
                <div className="table-responsive">
                <div className="table-wrapper">
                <EmployeeContextProvider>
                <EmployeeList />
                </EmployeeContextProvider>
                </div>
                </div>
                </div>
                <div className="name">
                <HomePage />   
                </div>
                </header>
                </div>
                </Protected>}/>
   
                <Route path='/about' Component={About} ></Route>
                <Route path='/contact' Component={Contact} ></Route>
                <Route path='/signout' Component={Login} ></Route>
                <Route path="/register" Component={Register}></Route>
                <Route path="." Component={PageNotFound}></Route>
                
            </Routes>
   </> 
}

export default App;



