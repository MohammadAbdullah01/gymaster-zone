import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Booking from "./components/Booking/Booking";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Login/Register/Register";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";

export const ContextService = createContext({})

function App() {
  const [service, setService] = useState({});
  return (
    <ContextService.Provider value={[service, setService]}>
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/booking' element={<RequireAuth><Booking /></RequireAuth>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </ContextService.Provider>
  );
}

export default App;
