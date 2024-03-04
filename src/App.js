import { BrowserRouter, Route, Routes } from "react-router-dom";
import Copyright from "./components/Copyright";

import Navbar from "./components/navbar";
import Nutri from "./Nutri";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Program from "./Pages/Program";
import Cart from "./components/Cart";
import BuildMen from "./Pages/BuildMen";
import BuildWomen from "./Pages/BuildWomen";

let App = () => {
  let data = [{ "logo": "https://avatars.githubusercontent.com/u/52980094?s=280&v=4" },{"back":"https://www.highsnobiety.com/static-assets/thumbor/zPraHyKNTPlJyWWSs7pPE4WiCes=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2018/01/22152911/dogpound-gym-nyc-06.jpg"}]
  let cloth=[{"cloth":"https://rewind.com/wp-content/uploads/2020/11/49373-gymshark-black-friday-optimized-e1595955020602.jpg"}]

  return (
    <div>
      <BrowserRouter>
      <Navbar  data={data[0]} />
      <Routes>
        <Route path="/" element={<Home data={data} cloth={cloth} />}/>
        <Route path="/nutrition" element={<Nutri/>}/>
        <Route path="/activewear" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/program" element={<Program/>}/>
        <Route path="/workoutmen" element={<BuildMen/>}/>
        <Route path="/workoutwomen" element={<BuildWomen/>}/>
      </Routes>
      </BrowserRouter>
      
      <Copyright/>
        
    </div>
  );
};
export default App;
