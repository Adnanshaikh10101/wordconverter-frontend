import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Login from "./pages/Login";
//import Register from "./pages/Register";
//import Dashboard from "./pages/Dashboard";
//import Profile from "./pages/Profile";
//import PrivateRoute from "./components/privateRoute";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Textform />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;