import LogoImg from "./../assets/logo.svg";

function Navbar() {
  return (
    <section id="navbar">
      <nav
        className="navbar navbar-expand-md fixed-top"
        style={{ backgroundColor: "#f1f3ff" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={LogoImg} alt="Logo Rental" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#our_service"
                >
                  Our Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why_us">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-register">
              Register
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
