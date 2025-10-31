import Footer from "../Home/Footer";
import Background from "../shop/Background";
import BlogCards from "./BlogCards";

const Blog = () => {
    return (
        <>
        <Background title={"Our Blog Posts"} desc={"Home  /  Blog"} />
        <div className="container">
            <div className="row" style={{ marginTop: "60px" }}>
            <BlogCards
                title={"Business Ueporting Rouincil Them Could Plan"}
                imgNum={"1"}
            />
            <BlogCards
                title={"Financial Reprotimg Qouncil What Could More"}
                imgNum={"2"}
            />
            <BlogCards
                title={"Consulting Reporting Qunc Arel Could More"}
                imgNum={"3"}
            />
            <BlogCards
                title={"Stratigic Social Media And Of Visual Design"}
                imgNum={"4"}
            />
            <BlogCards
                title={"Find The Right Path For Your Group Course Online "}
                imgNum={"5"}
            />
            <BlogCards
                title={"Learn By Doing With Real world Projects Other Countries"}
                imgNum={"6"}
            />
            <BlogCards
                title={"The Importance The Interinsic For Students"}
                imgNum={"7"}
            />
            <BlogCards
                title={"The Better Alternativ To Grading A Student Writing "}
                imgNum={"8"}
            />
            <BlogCards
                title={"The Challenge Global Learning In Public Education"}
                imgNum={"9"}
            />
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Blog;
