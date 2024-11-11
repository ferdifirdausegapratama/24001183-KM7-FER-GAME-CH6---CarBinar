import ItemImg from "./../assets/list item.svg";
import LogoImg from "./../assets/logo.svg";

const Footer = () => {
  return (
    <div>
      <section id="footer">
        <footer>
          <div className="container px-4 pt-3">
            <div className="row py-5 mt-lg-5">
              <div className="col-md-4">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
              </div>
              <div className="col-md-2">
                <div className="col mb-3">
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a
                        href="#our_service"
                        className="nav-link p-0 text-black fw-medium"
                      >
                        Our Service
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a
                        href="#why_us"
                        className="nav-link p-0 text-black fw-medium"
                      >
                        Why Us
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a
                        href="#testimonial"
                        className="nav-link p-0 text-black fw-medium"
                      >
                        Testimonial
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a
                        href="#faq"
                        className="nav-link p-0 text-black fw-medium"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <p>Connect With Us</p>
                <p>
                  <img src={ItemImg} alt="Sosmed" />
                </p>
              </div>
              <div className="col-md-3">
                <p>Copyright Binar 2024</p>
                <p>
                  <img src={LogoImg} alt="Logo" />
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
