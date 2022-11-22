import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Signup from "./components/SignUp/Signup";
import PrivateComponent from "./components/PrivateComp/PrivateComponent";
import Login from "./components/Login/Login";
import AddProduct from "./components/Products/AddProduct";
import ProductLists from "./components/Products/ProductLists";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductLists />} exact />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<h2> Update Product </h2>} />
            <Route path="/profile" element={<h2> Profile section </h2>} />
          </Route>

          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
