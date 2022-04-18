import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Login/Register/Register";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/booking' element={<RequireAuth><Booking /></RequireAuth>}></Route>
        <Route path='/blog' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
