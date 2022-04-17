import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Home></Home>}></Route>
        <Route path='/about' element={<Home></Home>}></Route>
        <Route path='/login' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
