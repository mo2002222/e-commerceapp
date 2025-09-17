import { Container } from "react-bootstrap";
import "./Home.css";
import CategoryCards from "./CategoryCards";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div style={{ marginTop: "60px" }}>
        <Container>
            <p
            className="text-center text-demo mb-1"
            style={{ color: "#FFB300", wordSpacing: "2px" }}
            >
            C H O O S E ANY P R O D U C T S
            </p>
            <h3 className="text-center fw-bold mb-4">Buy Everything With Us</h3>
            <div className="products">
            <div className="row mt-2">
                <CategoryCards
                className={"st-row"}
                imgNumber={1}
                imgName={"DSLR Camera"}
                ></CategoryCards>
                <CategoryCards
                className={"st-row"}
                imgNumber={2}
                imgName={"Shoes"}
                ></CategoryCards>
                <CategoryCards
                className={"st-row"}
                imgNumber={3}
                imgName={"Photography"}
                ></CategoryCards>
                <CategoryCards
                className={"nd-row"}
                imgNumber={4}
                imgName={"Colorful Bages"}
                ></CategoryCards>
                <CategoryCards
                className={"nd-row"}
                imgNumber={5}
                imgName={"Formal Drese"}
                ></CategoryCards>
                <CategoryCards
                className={"nd-row"}
                imgNumber={6}
                imgName={"Home Decor"}
                ></CategoryCards>
            </div>
            <div className="text-center">
                <Link to={'/shop'}><div className="btn p-2 rounded border fw-bold my-4 text-black-50 get-started">
                Get Startted Now
                </div></Link>
            </div>
            </div>
        </Container>
        </div>
    );
};

export default Products;
