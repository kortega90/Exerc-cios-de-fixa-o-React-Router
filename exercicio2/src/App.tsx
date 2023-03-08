import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Promotion from "./routes/Home/Promotion";
import Registration from "./routes/Home/Registration";

function App() {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<HomeBody />} />
            <Route path="promotion" element={<Promotion />} />
          </Route>
          <Route path="registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App
