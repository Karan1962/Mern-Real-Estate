import React from "react";
import { BrowserRouter ,Routes , Route} from "react-router-dom";
import { SignUp,Login,Profile,Home,About } from "./Pages";
import { Navbar,Hero } from "./Components";
const App = () => {
  return <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signup" element={<SignUp/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Profile" element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
};

export default App;
