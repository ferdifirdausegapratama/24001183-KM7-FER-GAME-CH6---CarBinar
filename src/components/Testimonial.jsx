import PhotoImg from "./../assets/img_photo.png";
import PhotoImg2 from "./../assets/img_photo2.png";
import PhotoImg3 from "./../assets/img_photo3.png";
import RateIcon from "./../assets/Rate.svg";

const Testimonial = () => {
  return (
    <div>
      <section id="testimonial">
        <div className="container g-3 mx-auto py-5 my-4 container-caousel">
          <h2 className="pb-2 pt-2 text-center">Testimonial</h2>
          <p className="text-center">
            Berbagai review positif dari para pelanggan kami
          </p>
          <div
            id="carouselExample"
            className="carousel slide m-auto d-flex img-fluid rounded-1"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container m-4 p-2 container-testimoni">
                  <div className="col d-flex align-items-start align-items-center py-3 px-4 testimoni">
                    <div className="col-md-1 m-auto me-4 profile">
                      <img src={PhotoImg} alt="profil" />
                    </div>
                    <div className="col-md-7 m-auto ms-4 review">
                      <h3 className="fs-2 text-body-emphasis">
                        <img src={RateIcon} alt="Rate" />
                      </h3>
                      <p>
                        Paragraph of text beneath the heading to explain the
                        heading. Well add onto it with another sentence and
                        probably just keep going until we run out of words.
                      </p>
                      <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container m-4 p-2 container-testimoni">
                  <div className="col d-flex align-items-start align-items-center py-3 px-4 testimoni">
                    <div className="col-md-1 m-auto me-4 profile">
                      <img src={PhotoImg2} alt="profil" />
                    </div>
                    <div className="col-md-7 m-auto ms-4 review">
                      <h3 className="fs-2 text-body-emphasis">
                        <img src={RateIcon} alt="Rate" />
                      </h3>
                      <p>
                        Paragraph of text beneath the heading to explain the
                        heading. Well add onto it with another sentence and
                        probably just keep going until we run out of words.
                      </p>
                      <p className="fw-bold">Ferdi Firdaus FSW2, Jatim</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container m-4 p-2 container-testimoni">
                  <div className="col d-flex align-items-start align-items-center py-3 px-4 testimoni">
                    <div className="col-md-1 m-auto me-4 profile">
                      <img src={PhotoImg3} alt="profil" />
                    </div>
                    <div className="col-md-7 m-auto ms-4 review">
                      <h3 className="fs-2 text-body-emphasis">
                        <img src={RateIcon} alt="Rate" />
                      </h3>
                      <p>
                        Paragraph of text beneath the heading to explain the
                        heading. Well add onto it with another sentence and
                        probably just keep going until we run out of words.
                      </p>
                      <p className="fw-bold">Ferdi, Surabaya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
