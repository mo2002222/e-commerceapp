import Footer from "../Home/footer";
import Background from "../shop/Background";

const Contact = () => {
  const contactList = [
    {
      imgUrl: "/src/assets/images/icon/01.png",
      imgAlt: "contact icon",
      title: "Office Address",
      desc: "1201 park street, Fifth Avenue",
    },
    {
      imgUrl: "/src/assets/images/icon/02.png",
      imgAlt: "contact icon",
      title: "Phone number",
      desc: "+22698 745 632,02 982 745",
    },
    {
      imgUrl: "/src/assets/images/icon/03.png",
      imgAlt: "contact icon",
      title: "Send email",
      desc: "admin@shopcart.com",
    },
    {
      imgUrl: "/src/assets/images/icon/04.png",
      imgAlt: "contact icon",
      title: "Our website",
      desc: "www.shopcart.com",
    },
  ];

  return (
    <div>
      <Background title={"Get In Touch With Us"} desc={"Home / Contact"} />
      <div className="container">
        <h5
          className="fw-medium mb-3 text-center"
          style={{
            color: "#f4511ecf",
            letterSpacing: "4px",
            marginTop: "60px",
          }}
        >
          Get In Touch With Us
        </h5>
        <h4 className="fw-bold text-center">
          We are Always Eager To Hear From You!
        </h4>
        <div className="row mt-5">
          <div className="col-lg-8 col-12">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.06225701555!2d-74.30932678804537!3d40.697019288954785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1727180432779!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: "0", height: "400px" }}
              allowfullscreen
              //   loading="lazy"
              frameBorder="0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-lg-4 col-12 mb-4">
            {contactList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-3 d-flex gap-3 align-items-center mb-2"
                  style={{ boxShadow: "0 0 7px 0 #eeeeeed9" }}
                >
                  <img
                    src={item.imgUrl}
                    alt={item.imgAlt}
                    style={{ maxHeight: "40px" }}
                  />
                  <div className="description">
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <p className="fw-normal text-black-50 mb-0">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <h5
          className="fw-medium mb-3 text-center"
          style={{
            color: "#f4511ecf",
            letterSpacing: "4px",
            marginTop: "60px",
          }}
        >
          Get In Touch With Us
        </h5>
        <h4 className="fw-bold text-center mb-5">
          Fill The Form Below So We Can Get To Know <br /> You And Your Needs
          Better.
        </h4>

        <div className="message-info d-flex justify-content-center">
          <div className="row mb-3">
            <div className="col-md-6 col-12 text-md-start text-center">
              <input
                type="text"
                placeholder="Your Name*"
                className="p-1"
                style={{
                  border: "2px solid rgb(238 238 238 / 93%)",
                  outline: "none",
                }}
              />
            </div>
            <div className="col-md-6 col-12 text-md-start text-center">
              <input
                type="text"
                placeholder="Your Email*"
                className="p-1"
                style={{
                  border: "2px solid rgb(238 238 238 / 93%)",
                  outline: "none",
                }}
              />
            </div>
          </div>
        </div>
        <div className="message-info d-flex justify-content-center">
          <div className="row mb-3">
            <div className="col-md-6 col-12 text-md-start text-center">
              <input
                type="text"
                placeholder="Mobile Number*"
                className="p-1"
                style={{
                  border: "2px solid rgb(238 238 238 / 93%)",
                  outline: "none",
                }}
              />
            </div>
            <div className="col-md-6 col-12 text-md-start text-center">
              <input
                type="text"
                placeholder="Your Subject*"
                className="p-1"
                style={{
                  border: "2px solid rgb(238 238 238 / 93%)",
                  outline: "none",
                }}
              />
            </div>
          </div>
        </div>
        <div className="message-info d-flex justify-content-center mb-4">
          <textarea
            name="Message"
            id=""
            placeholder="Your Message*"
            style={{
              width: "412px",
              height: "170px",
              padding: "8px 0 0 6px",
              outline: "none",
              border: "2px solid rgb(238 238 238 / 93%)",
            }}
          ></textarea>
        </div>

        <div className="send-message text-center mb-4">
          <div
            className="btn rounded text-white"
            style={{ background: "#FF5722" }}
          >
            Send Message
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
