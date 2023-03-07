import { Routes, Route } from "react-router-dom";
import CartPage from "./Pages/User/CartPage";
import Category_Page from "./Pages/User/Category_Page";
import Home from "./Pages/User/Home";
import SingleProduct from "./Pages/User/SingleProduct";
import UserProfile from "./Pages/User/UserProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category_Page />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
