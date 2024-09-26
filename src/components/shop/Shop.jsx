import { useEffect, useState } from "react";
import products from "/src/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./shop.css";
import Popular from "./Popular";
import PopTags from "./PopTags";
import { Link } from "react-router-dom";
import Background from "./Background";
import Footer from "../Home/footer";

const Shop = () => {
const [listMood, setListMood] = useState(false);
const [gripMood, setGripMood] = useState(true);
const [shopProducts, setShopProducts] = useState([]);
const [searchProducts, setSearchProducts] = useState([]);
const [results, setResults] = useState([]);
const [catergoration, setCategoration] = useState("All");
const [catergorationProducts, setCatergorationProducts] = useState();
const [stProduct, setStProduct] = useState(1);
const [ndProduct, setNdProduct] = useState(10);
const handleShowMood = () => {
    if (!listMood) {
    setListMood(true);
    setGripMood(false);
    } else {
    setGripMood(true);
    setListMood(false);
    }
};
useEffect(() => {
    setShopProducts(products);
}, []);
const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 10;
const totalPages = Math.ceil(shopProducts.length / productsPerPage);
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = shopProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
);
const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setStProduct((pageNumber - 1) * 10 + 1);
    setNdProduct(pageNumber === 8 ? 76 : pageNumber * 10);
};
const handleNextPage = () => {
    setCurrentPage((prevPage) =>
    prevPage < totalPages ? prevPage + 1 : prevPage
    );
    setStProduct((e) => (currentPage <= 8 ? e + 10 : e));
    setNdProduct(
    currentPage === 7
        ? 76
        : (e) => (currentPage >= 1 ? e + currentProducts.length : e)
    );
};
const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    setStProduct((e) => (currentPage > 1 ? e - 10 : e));
    setNdProduct(
    currentPage === 8 ? 70 : (e) => (currentPage > 1 ? e - 10 : e)
    );
};
const productsCards = currentProducts.map((product, index) => {
    if (gripMood) {
    return (
        <div key={index} className="col-lg-4 col-md-6 col-12">
        <div
            className="card mb-2"
            style={{ padding: "10px", background: "#fff", border: "none" }}
        >
            <div className="overlay-layer align-items-center justify-content-center gap-3">
            <Link
                to={"/shop/product"}
                state={{
                path: product.img,
                productName: product.name,
                price: product.price,
                seller: product.seller,
                }}
            >
                <FontAwesomeIcon
                icon={faEye}
                style={{
                    color: "#fff",
                    padding: "8px",
                    borderRadius: "50%",
                    background: "#FF9800",
                }}
                />
            </Link>
            <FontAwesomeIcon
                icon={faHeart}
                style={{
                color: "#fff",
                padding: "8px",
                borderRadius: "50%",
                background: "#FF9800",
                }}
            />
            <FontAwesomeIcon
                icon={faCartShopping}
                style={{
                color: "#fff",
                padding: "8px",
                borderRadius: "50%",
                background: "#FF9800",
                }}
            />
            </div>
            <img className="mb-3" src={`${product.img}`} alt="" />
            <h6 className="fw-bold text-center mb-2">{product.name}</h6>
            <div className="stars mb-1 text-center">
            <FontAwesomeIcon icon={faStar} color="#FFC107" />
            <FontAwesomeIcon icon={faStar} color="#FFC107" />
            <FontAwesomeIcon icon={faStar} color="#FFC107" />
            <FontAwesomeIcon icon={faStar} color="#FFC107" />
            <FontAwesomeIcon icon={faStar} color="#FFC107" />
            </div>
            <h6 className="text-center">{product.price}$</h6>
        </div>
        </div>
    );
    } else {
    return (
        <div key={index} className="col-12">
        <div className="card mb-2" style={{ padding: "0", border: "none" }}>
            <div className="overlay-layer align-items-center justify-content-center gap-3">
            <Link
                to={"/shop/product"}
                state={{
                path: product.img,
                productName: product.name,
                price: product.price,
                seller: product.seller,
                }}
            >
                <FontAwesomeIcon
                icon={faEye}
                style={{
                    color: "#fff",
                    padding: "8px",
                    borderRadius: "50%",
                    background: "#FF9800",
                }}
                />
            </Link>
            <FontAwesomeIcon
                icon={faHeart}
                style={{
                color: "#fff",
                padding: "8px",
                borderRadius: "50%",
                background: "#FF9800",
                }}
            />
            <FontAwesomeIcon
                icon={faCartShopping}
                style={{
                color: "#fff",
                padding: "8px",
                borderRadius: "50%",
                background: "#FF9800",
                }}
            />
            </div>
            <div className="d-flex flex-md-row flex-column gap-3 align-items-center">
            <img
                className="mb-3 img-fluid"
                src={`${product.img}`}
                alt=""
                style={{ height: "250px" }}
            />
            <div className="d-flex flex-column text-center">
                <h6 className="fw-bold text-center mb-2">{product.name} </h6>
                <div className="stars mb-1">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                </div>
                <h6 className="text-center">{product.price}$</h6>
            </div>
            </div>
        </div>
        </div>
    );
    }
});
useEffect(() => {
    setSearchProducts(products);
    setCatergorationProducts(products);
}, []);

const hanldeSearch = (e) => {
    const filteringData = searchProducts.filter((ele) => {
    return ele.category.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setResults(filteringData);
};
const resulutsField = results.map((ele, i) => {
    if (results.length === 76) {
    <></>;
    } else {
    return (
        <li
        key={i}
        className="d-flex gap-3 justify-content-start align-items-center mb-2"
        style={{ cursor: "pointer" }}
        >
        <img
            src={ele.img}
            alt=""
            className="img-fluid"
            style={{ maxWidth: "70px" }}
        />
        <div className="info d-flex flex-column gap-1 ">
            <p className="text-black-50 fs-6 m-0">{ele.name}</p>
            <p className="fw-bold mb-0">{ele.price}$</p>
        </div>
        </li>
    );
    }
});

const handelCategoration = (category) => {
    setCategoration(category);
    const categoryFilter = catergorationProducts.filter((cate) => {
    return cate.category.toLowerCase() === category.toLowerCase();
    });
    setShopProducts(categoryFilter);
};

return (
    <div>
    <Background title={"Shop Pag"} desc={"Home  /  Shop"} />
    <main className="container">
        <div className="row" style={{ marginTop: "60px" }}>
        <div className="right-section col-lg-8 col-12">
            <div
            className="show-way d-flex flex-row justify-content-between p-3 align-items-center mb-5"
            style={{
                boxShadow: "0px 0px 7px 0px #7e7e7e75",
                borderRadius: "5px",
            }}
            >
            <h6 className="text-black-50 m-0">
                Showing {stProduct}-{ndProduct} Of 138 Results
            </h6>
            <div
                className="icons d-flex gap-2 align-items-center"
                style={{ cursor: "pointer" }}
            >
                <FontAwesomeIcon
                icon={faGripHorizontal}
                style={{ color: `${gripMood ? "#FF5722" : "#222"}` }}
                onClick={handleShowMood}
                />
                <FontAwesomeIcon
                icon={faList}
                style={{ color: `${listMood ? "#FF5722" : "#222"}` }}
                onClick={handleShowMood}
                />
            </div>
            </div>

            <div
            className="products"
            style={{ background: "#fafafac9", borderRadius: "5px" }}
            >
            <div className="row px-1">{productsCards}</div>
            </div>
            <div className="pagination d-flex justify-content-center align-items-center mt-md-5 mt-4">
            <FontAwesomeIcon
                className="d-md-block d-none"
                onClick={handlePreviousPage}
                icon={faAngleLeft}
                style={{
                fontSize: "25px",
                padding: "10px 15px",
                borderRadius: "20%",
                background: "#e9e9e99c",
                marginRight: "25px",
                cursor: "pointer",
                pointerEvents: `${currentPage === 1 ? "none" : ""}`,
                }}
            />
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`${
                    currentPage === index + 1 ? "active" : ""
                } m-sm-2 m-0`}
                >
                {index + 1}
                </button>
            ))}
            <FontAwesomeIcon
                className="d-md-block d-none"
                onClick={handleNextPage}
                icon={faAngleRight}
                style={{
                fontSize: "25px",
                padding: "10px 15px",
                borderRadius: "20%",
                background: "#e9e9e99c",
                marginLeft: "16px",
                cursor: "pointer",
                pointerEvents: `${currentPage === 8 ? "none" : ""}`,
                }}
            />
            </div>
        </div>
        <div className="left-section col-lg-4 col-12">
            <div
            className="search-field py-4 px-3 bg-white mb-4 mt-lg-0 mt-4"
            style={{ boxShadow: "#80808057 0px 0px 7px 0px" }}
            >
            <div
                className="input-field d-flex justify-content-between align-items-center px-1 py-2"
                style={{ background: "#e5e5e5e5", borderRadius: "3px" }}
            >
                <input
                type="text"
                placeholder="Search..."
                style={{
                    border: "none",
                    background: "transparent",
                    flex: "1",
                }}
                onChange={hanldeSearch}
                />
                <FontAwesomeIcon
                icon={faSearch}
                className="text-black-50"
                style={{ cursor: "pointer" }}
                />
            </div>
            {resulutsField}
            </div>
            <div className="all-categories mb-4">
            <h5 className="fw-bold">All Categories</h5>
            <ul className="list-unstyled d-flex flex-wrap">
                <li
                onClick={() => {
                    setShopProducts(products);
                    setCategoration("All");
                }}
                className={catergoration === "All" ? "bg-warning" : ""}
                >
                All
                </li>
                <li
                onClick={() => handelCategoration("Men's Sneaker")}
                className={
                    catergoration === "Men's Sneaker" ? "bg-warning" : ""
                }
                >
                Mens Sneakers
                </li>
                <li
                onClick={() => handelCategoration("Men's Pants")}
                className={
                    catergoration === "Men's Pants" ? "bg-warning" : ""
                }
                >
                Mens Pants
                </li>
                <li
                onClick={() => handelCategoration("Men's Boot")}
                className={catergoration === "Men's Boot" ? "bg-warning" : ""}
                >
                Mens Boot
                </li>
                <li
                onClick={() => handelCategoration("Bag")}
                className={catergoration === "Bag" ? "bg-warning" : ""}
                >
                Bags
                </li>
                <li
                onClick={() => handelCategoration("Cap")}
                className={catergoration === "Cap" ? "bg-warning" : ""}
                >
                Caps
                </li>
                <li
                onClick={() => handelCategoration("Earphones")}
                className={catergoration === "Earphones" ? "bg-warning" : ""}
                >
                Earphones
                </li>
                <li
                onClick={() => handelCategoration("Bottle")}
                className={catergoration === "Bottle" ? "bg-warning" : ""}
                >
                Bottle
                </li>
            </ul>
            </div>
            <div className="popular d-flex flex-column mb-3">
            <Popular />
            </div>
            <div className="pop-tages">
            <PopTags />
            </div>
        </div>
        </div>
    </main>
    <Footer/>
    </div>
);
};

export default Shop;
