import CompleteIcon from "./../assets/icon_complete.svg";
import PriceIcon from "./../assets/icon_price.svg";
import hrsIcon from "./../assets/icon_24hrs.svg";

const WhyUs = () => {
  return (
    <div>
      <section id="why_us">
        <div className="container mt-5">
          <div className="row g-2 pt-5 pb-2">
            <h2 className="why_us">Why Us</h2>
            <p className="why_us">Mengapa harus pilih Binar Car Rental?</p>
            <div className="col-md-3 p-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <span>
                      <img src={CompleteIcon} alt="Icon Complete" />
                    </span>
                  </h5>
                  <h6 className="card-subtitle mb-2 fw-bold">Mobile Lengkap</h6>
                  <p className="card-text">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <span>
                      <img src={PriceIcon} alt="Icon Complete" />
                    </span>
                  </h5>
                  <h6 className="card-subtitle mb-2 fw-bold">Harga Murah</h6>
                  <p className="card-text">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <span>
                      <img src={hrsIcon} alt="Icon Complete" />
                    </span>
                  </h5>
                  <h6 className="card-subtitle mb-2 fw-bold">Layanan 24 Jam</h6>
                  <p className="card-text">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <span>
                      <img src={PriceIcon} alt="Icon Complete" />
                    </span>
                  </h5>
                  <h6 className="card-subtitle mb-2 fw-bold">
                    Sopir Profesional
                  </h6>
                  <p className="card-text">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
