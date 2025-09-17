import { useEffect, useState } from "react";
import "../shop/shop.css";
import Background from "./Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { sum } from "lodash";
import Select from "./Select";
import MyVerticallyCenteredModal from "./PaymentMethod";

const CartPage = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [totoalPrice, setTotoalPrice] = useState();
  const [clinetCountry, setClinetCountry] = useState("USA");
  const [modalShow, setModalShow] = useState(false);
  const HandleDelet = (path) => {
    const filtringDataArray = cart.filter((ele) => {
      return ele.imgPath !== path;
    });
    localStorage.setItem("cart", JSON.stringify(filtringDataArray));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };

  const handlIncreasQantity = (e, index) => {
    const newData = cart.map((product, ind) => {
      return ind === index ? { ...product, count: product.count + 1 } : product;
    });
    localStorage.setItem("cart", JSON.stringify(newData));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };

  const handlDecreasQantity = (e, index) => {
    const newData = cart.map((product, ind) => {
      if (product.count > 1) {
        return ind === index
          ? { ...product, count: product.count - 1 }
          : product;
      } else {
        return ind === index ? { ...product, count: 1 } : product;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newData));
    setCart(JSON.parse(localStorage.getItem("cart")));
  };
  useEffect(() => {
    const res = [];
    {
      cart.filter((prod) => {
        res.push(prod.price.price * prod.count);
      });
    }
    setTotoalPrice(sum(res));
  }, [cart]);

  const productDetails = cart.map((prod, index) => {
    return (
      <tr key={index}>
        <td className="align-left">
          <div className="d-flex gap-2 align-items-center">
            <img src={`${prod.imgPath}`} alt="" className="productPC" />
            <p className="fw-bold mb-0">{prod.product.productName}</p>
          </div>
        </td>
        <td className="text-center">{prod.price.price}$</td>
        <td className="text-center" style={{ whiteSpace: "nowrap" }}>
          <button
            id={index}
            className="border fw-bold px-sm-3 px-1 py-1 bg-white me-1"
            style={{ borderRadius: "3px", borderColor: "#555" }}
            onClick={() => handlIncreasQantity(event, index)}
          >
            +
          </button>
          <span id={index}>{prod.count}</span>
          <button
            id={index}
            className="border fw-bold px-sm-3 px-1 py-1 bg-white ms-1"
            style={{ borderRadius: "3px", borderColor: "#555" }}
            onClick={() => handlDecreasQantity(event, index)}
          >
            -
          </button>
        </td>
        <td className="text-center" style={{ whiteSpace: "nowrap" }}>
          {prod.price.price * prod.count} $
        </td>
        <td className="text-center">
          <img
            src="/src/assets/images/shop/del.png"
            alt=""
            onClick={() => HandleDelet(prod.imgPath)}
            style={{ cursor: "pointer" }}
          />
        </td>
      </tr>
    );
  });

  return (
    <>
      <Background title={"Shop Cart"} desc={"Home  /  Cart"} />
      <div className="container" style={{ marginTop: "100px" }}>
        <table
          className="mb-5"
          style={{ boxShadow: "rgba(206,206,206,0.25) 0 0 7px 0" }}
        >
          <thead>
            <tr>
              <th className="align-left">Product</th>
              <th className="text-center">Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Total</th>
              <th className="text-center">Edit</th>
            </tr>
          </thead>
          <tbody>{productDetails}</tbody>
        </table>
        <main className="information d-flex flex-column">
          <div className="pay-information mb-5">
            <div className="row">
              <div className="col-md-6 col-12 coupon">
                <div className="d-flex justify-content-md-start justify-content-center mb-md-0 mb-4">
                  <input
                    type="text"
                    name="coupon"
                    id="coupon code"
                    style={{ maxWidth: "145px" }}
                    className="border px-2"
                    placeholder="Coupon code..."
                  />
                  <button
                    className="border-0 px-3 py-2 text-white"
                    style={{
                      borderRadius: "2px",
                      backgroundColor: "rgb(239, 108, 0)",
                    }}
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-12 pay">
                <div className="d-flex justify-content-evenly">
                  <button
                    className="border-0 px-3 py-2 text-dark"
                    style={{ borderRadius: "1px" }}
                  >
                    Update Cart
                  </button>
                  <button
                    className="border-0 p-2 btn btn-primary "
                    style={{ borderRadius: "3px" }}
                    onClick={() => setModalShow(true)}
                  >
                    Procees to check out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="order-information">
            <div className="row">
              <div className="col-lg-6 col-12 d-flex flex-column">
                <h4 className="fw-bold">Calculate Shipping</h4>
                <div
                  className="cutomer-info d-flex mb-3"
                  style={{ position: "relative" }}
                >
                  <select
                    className="text-black-50 border w-100 px-1 py-2 select-country"
                    style={{
                      outline: "none",
                      position: "relative",
                      zIndex: "2",
                      background: "transparent",
                      transition: ".6s",
                    }}
                    onChange={(e) => {
                      setClinetCountry(e.target.value);
                    }}
                  >
                    {/* <option value="" disabled selected hidden>Country</option> */}
                    <option value="USA">United States America</option>
                    <option value="Eg">Egypt</option>
                    <option value="UK">United Kingdom</option>
                    <option value="KSA">Kingdom Saudi Arabia</option>
                    <option value="UEA">Untide Arab Emirates</option>
                  </select>
                  <div className="custom-arrow justify-content-center d-flex align-items-center">
                    <FontAwesomeIcon icon={faArrowDown} />{" "}
                  </div>
                </div>

                <div className="state d-flex gap-3 mb-3">
                  <div className="d-flex w-50" style={{ position: "relative" }}>
                    <Select clinetCountry={clinetCountry} />
                    <div
                      className="custom-arroww justify-content-center d-flex align-items-center"
                      style={{ position: "absolute", right: "0", top: "0" }}
                    >
                      <FontAwesomeIcon icon={faArrowDown} />{" "}
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="postcode/ZIP"
                    className="w-50 border"
                    style={{ outline: "none" }}
                  />
                </div>

                <div className="text-md-start text-center">
                  {" "}
                  <button
                    className="border-0 p-2 text-white "
                    style={{
                      borderRadius: "3px",
                      background: "rgb(239, 108, 0)",
                      width: "fit-content",
                    }}
                  >
                    Update Total
                  </button>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="total-cost d-flex flex-column mt-lg-0 mt-4">
                  <h4 className="fw-bold">Cart Totals</h4>
                  <div
                    className="subtotal mb-3 d-flex justify-content-between align-items-center p-2"
                    style={{ boxShadow: "rgba(206,206,206,.55) 0 0 7px 0" }}
                  >
                    <p className="fw-medium mb-0">Cart Subttotal</p>
                    <p
                      className="fw-medium mb-0"
                      style={{ color: "rgb(243 70 70 / 72%)" }}
                    >
                      $ {totoalPrice}
                    </p>
                  </div>
                  <div
                    className="subtotal mb-3 d-flex justify-content-between align-items-center p-2"
                    style={{ boxShadow: "rgba(206,206,206,.55) 0 0 7px 0" }}
                  >
                    <p className="fw-medium mb-0">Shipping and Handling</p>
                    <p
                      className="fw-medium mb-0"
                      style={{ color: "rgb(243 70 70 / 72%)" }}
                    >
                      free shiping
                    </p>
                  </div>
                  <div
                    className="subtotal mb-3 d-flex justify-content-between align-items-center p-2"
                    style={{ boxShadow: "rgba(206,206,206,.55) 0 0 7px 0" }}
                  >
                    <p className="fw-medium mb-0">Order Total</p>
                    <p
                      className="fw-medium mb-0"
                      style={{ color: "rgb(243 70 70 / 72%)" }}
                    >
                      $ {totoalPrice}.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
};

export default CartPage;
