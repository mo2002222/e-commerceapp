import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import CategoryCards from "./CategoryCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ProductsCategory = () => {
    const ProductData = [
        {
        imgUrl: "/assets/images/categoryTab/01.jpg",
        cate: "Shoes",
        title: "Nike Premier X",
        author: "assets/images/course/author/01.jpg",
        brand: "Nike",
        price: "$199.00",
        id: 1,
        },
        {
        imgUrl: "/assets/images/categoryTab/02.jpg",
        cate: "Bags",
        title: "Asthetic Bags",
        author: "assets/images/course/author/02.jpg",
        brand: "D&J Bags",
        price: "$199.00",
        id: 2,
        },
        {
        imgUrl: "/assets/images/categoryTab/03.jpg",
        cate: "Phones",
        title: "iPhone 12",
        author: "/assets/images/categoryTab/brand/apple.png",
        brand: "Apple",
        price: "$199.00",
        id: 3,
        },
        {
        imgUrl: "/assets/images/categoryTab/04.jpg",
        cate: "Bags",
        title: "Hiking Bag 15 Nh100",
        author: "assets/images/course/author/04.jpg",
        brand: "Gucci",
        price: "$199.00",
        id: 4,
        },
        {
        imgUrl: "/assets/images/categoryTab/05.jpg",
        cate: "Shoes",
        title: "Outdoor Sports Shoes",
        author: "assets/images/course/author/05.jpg",
        brand: "Nike",
        price: "$199.00",
        id: 5,
        },
        {
        imgUrl: "/assets/images/categoryTab/06.jpg",
        cate: "Beauty",
        title: "COSRX Snail Mucin",
        author: "assets/images/course/author/06.jpg",
        brand: "Zaara",
        price: "$199.00",
        id: 6,
        },
        {
        imgUrl: "/assets/images/categoryTab/07.jpg",
        cate: "Bags",
        title: "Look Less Chanel Bag ",
        author: "assets/images/course/author/01.jpg",
        brand: "Gucci",
        price: "$199.00",
        id: 7,
        },
        {
        imgUrl: "/assets/images/categoryTab/08.jpg",
        cate: "Shoes",
        title: "Casual Sneakers",
        author: "assets/images/course/author/02.jpg",
        brand: "Bata",
        price: "$199.00",
        id: 8,
        },
    ];
    const [items, setItems] = useState([]);
    const handelClick = (e) => {
        const filter = ProductData.filter((product) => {
        return product.cate === e.target.innerHTML;
        });
        setItems(filter);
    };
    useEffect(() => {
        setItems(ProductData);
    }, []);
    const filtering = items.map((card) => {
        return (
        <div key={card.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="img">
            <img className="img-fluid" src={card.imgUrl} alt="" />
            <div
                className="d-flex align-items-center justify-content-between "
                style={{ padding: "2px 8px", background: "rgb(255 179 0 / 75%)" }}
            >
                <h6>{card.cate}</h6>
                <div className="stars">
                <FontAwesomeIcon icon={faStar} style={{ fontSize: "15px" }} />
                <FontAwesomeIcon icon={faStar} style={{ fontSize: "15px" }} />
                <FontAwesomeIcon icon={faStar} style={{ fontSize: "15px" }} />
                <FontAwesomeIcon icon={faStar} style={{ fontSize: "15px" }} />
                <FontAwesomeIcon icon={faStar} style={{ fontSize: "15px" }} />
                </div>
            </div>
            <div className="description" style={{ padding: "8px" }}>
                <h6 className="fw-bold">{card.title}</h6>
            </div>
            <hr style={{ margin: "0" }} />
            <div
                className="price d-flex align-items-center justify-content-between"
                style={{ padding: "8px" }}
            >
                <h6>{card.brand}</h6>
                <h6 style={{ color: "#FFB300" }}>{card.price}</h6>
            </div>
            </div>
        </div>
        );
    });

    return (
        <div style={{ marginTop: "50px", position: "relative", paddingTop: "1px" }}>
        <div
            style={{
            position: "absolute",
            width: "100%",
            zIndex: "-1",
            height: "100%",
            }}
        >
            <div
            style={{
                backgroundImage: "url(/assets/images/shape-img/01.jpg)",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                opacity: ".7",
            }}
            >
            <img
                className="animated"
                src="src\assets\images\shape-img\icon\01.png"
                alt=""
            />
            <img
                className="animated"
                src="src\assets\images\shape-img\icon\02.png"
                alt=""
            />
            </div>
        </div>
        <Container>
            <div
            className="header bg-white border border-top-0"
            style={{ margin: "100px 0 40px 0", padding: "15px" }}
            >
            <div className="row d-flex align-items-center justify-content-between">
                <div className="col-md-6 col-12 text-md-start text-center">
                <h2 className="fw-bold">Our Products</h2>
                </div>
                <div className="col-md-6 col-12 d-flex justify-content-md-end justify-content-center">
                <ul className=" ul-products list-unstyled d-flex flex-row align-items-center mb-0">
                    <li
                    className="p-sm-2 p-1 fw-normal"
                    onClick={() => {
                        setItems(ProductData);
                    }}
                    >
                    All
                    </li>
                    <li className="p-sm-2 p-1 fw-normal" onClick={handelClick}>
                    Shoes
                    </li>
                    <li className="p-sm-2 p-1 fw-normal" onClick={handelClick}>
                    Bags
                    </li>
                    <li className="p-sm-2 p-1 fw-normal" onClick={handelClick}>
                    Phones
                    </li>
                    <li className="p-sm-2 p-1 fw-normal" onClick={handelClick}>
                    Beauty
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="card border-0"></div>
            {filtering}
            </div>
        </Container>
        </div>
    );
};

export default ProductsCategory;
