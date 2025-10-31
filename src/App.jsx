import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/shop/Shop";
import Header from "./components/Home/Header";
import ShopProduct from "./components/shop/ShopProduct";
import CartPage from "./components/shop/CartPage";
import Blog from "./components/Blog/Blog";
import Singleblog from "./components/Blog/Singleblog";
import AboutUs from "./components/About/Aboutus";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/notFind/NotFound";
import Login from "./components/Login/Login";
import CreateAccount from "./components/Register/Register";
import { useEffect, useState, createContext } from "react";
export const store = createContext();
export default function App() {
const [isLogin, setIsLogin] = useState();
const [userData, setUserData] = useState();

useEffect(() => {
    const fetchData = async () => {
    await fetch("http://localhost:3000/auth/check", {
        method: "GET",
        credentials: "include",
    })
        .then((response) => response.json())
        .then((data) => {
        setIsLogin(data.authenticated);
        setUserData(data.user);
        })
        .catch((err) => console.log("Error", err));
    };
    fetchData();
}, []);

return (
    <store.Provider value={{ isLogin, userData }}>
    <Router basename="/">
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/product" element={<ShopProduct />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/singleBlog" element={<Singleblog />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<CreateAccount />} />
        </Routes>
    </Router>
    </store.Provider>
);
}
