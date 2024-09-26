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

export default function App() {
    return (
        <>
        <Router basename="/reactjs-ecommerce-website">
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
        </>
    );
}
