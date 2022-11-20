import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Signup from "./components/SignUp/Signup";
import PrivateComponent from "./components/PrivateComp/PrivateComponent";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h2> Product Listing </h2>} exact />
            <Route path="/add" element={<h2> Add Product </h2>} />
            <Route path="/update" element={<h2> Update Product </h2>} />
            <Route path="/profile" element={<h2> Profile section </h2>} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
