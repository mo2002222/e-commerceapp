import { useContext } from "react";
import { store } from "../../App";
const UserState = () => {
  const formStyle = {
    background: "linear-gradient(to bottom, white, transparent)",
    padding: "63px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const { isLogin } = useContext(store);

  return (
    <div style={{ marginTop: "50px", position: "relative" }}>
      <div
        className="bg"
        style={{
          backgroundImage: "url(src/assets/images/bg-img/07.jpg)",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
      ></div>
      <div className="container">
        <div
          style={{ paddingTop: "140px" }}
          className="content row d-flex justify-content-between align-items-center"
        >
          <div
            className="col-md-6"
            style={{ transform: `${!isLogin ? "0" : "translate(0px, -60px)"}` }}
          >
            <div
              className="left-section text-md-start text-center"
              style={{ width: "fit-content", lineHeight: "40px" }}
            >
              <h6 className="mb-3" style={{ color: "#FFB300" }}>
                Save The Day
              </h6>
              <h4 className="text-white fs-2" style={{ wordSpacing: "3px" }}>
                Join On Day Long Free Workshop For{" "}
                <span className="fw-bold">Advance</span>{" "}
                <span className="fw-bold fs-4" style={{ color: "#FFB300" }}>
                  Mastering
                </span>{" "}
                <span className="fw-bold fs-4"> On Sale</span>{" "}
              </h4>
              <p className="text-white mt-2">Limited Time Offer! Hurry Up</p>
              <h2 className="fw-bold"></h2>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
            <div className="right-section" style={{ width: "fit-content" }}>
              <div className="container ">
                <div
                  className="justify-content-center"
                  style={{ width: "fit-content" }}
                >
                  {!isLogin && (
                    <div className="">
                      <div className="form-container" style={formStyle}>
                        <h2 className="text-center mb-4">Register Now</h2>
                        <form>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control mb-3"
                              id="username"
                              placeholder="username"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control mb-3"
                              id="email"
                              placeholder="email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="tel"
                              className="form-control mb-4"
                              id="phone"
                              placeholder="phone"
                            />
                          </div>
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn fw-mediume"
                              style={{
                                background: "#FFB300",
                                padding: "4px 45px",
                              }}
                            >
                              Register Now
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserState;
