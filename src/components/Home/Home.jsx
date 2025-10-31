// import { useContext } from "react";
import About from "./About";
import AppSection from "./AppSection";
import Customer from "./Customer";
import Footer from "./Footer";
import Header from "./Header";
import Land from "./Land";
import Products from "./Products";
import ProductsCategory from "./ProductsCategory";
import UserState from "./UserState";
// import { store } from "../../App";
function Home() {

    // const {isLogin} = useContext(store);
    
    return (
        <div
        style={{
            background: "url(/assets/images/bg-img/06.jpg)",
            height: "100vh",
        }}
        >
        <div style={{ height: "100vh" }}>
            <Header />
            <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
            }}
            >
            <Land />
            </div>
        </div>
        <Products />
        <ProductsCategory />
        <UserState />
        <Customer />
        <About />
        <AppSection />
        <Footer />
        </div>
    );
}

export default Home;
