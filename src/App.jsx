//  Run "npm install" to install node modules
// "npm install react-icons"
//  "npm i react-toastify"
// "npm install @reduxjs/toolkit react-redux" to install redux toolkit
// "npm run start" to run on the browser

import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
  </div>)
};

export default App; 