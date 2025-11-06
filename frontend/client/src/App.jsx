import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./Add";
import Employees from "./Empoolee";
import WelcomePage from "./WelCome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/add" element={<CreateEmployee />} />
        <Route path="/WelcomePage" element={<WelcomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

