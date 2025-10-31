import Posts from "./Posts";
const Popular = () => {
    return (
        <div>
        <h5 className="fw-bold mb-4">Most Popular Posts</h5>
        <Posts imgsrc={"/assets/images/blog/09.jpg"} />
        <Posts imgsrc={"/assets/images/blog/10.jpg"} />
        <Posts imgsrc={"/assets/images/blog/11.jpg"} />
        <Posts imgsrc={"/assets/images/blog/12.jpg"} />
        </div>
    );
};

export default Popular;
