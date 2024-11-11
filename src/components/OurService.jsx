import ServiceImg from "./../assets/img_service.png";
import CentangImg from "./../assets/centang.png";

const OurService = () => {
  return (
    <div>
      <section id="our_service">
        <div className="container pt-4">
          <div className="row ps-5 pt-5 pe-5 g-4">
            <div className="col-md-6">
              <img src={ServiceImg} className="img-fluid" alt="Image Service" />
            </div>
            <div className="col-md-6 my-auto p-4">
              <h2>Best Car Rental for any kind of trip in Jombang!</h2>
              <p>
                Sewa mobil di Surabaya bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <p>
                <span>
                  <img src={CentangImg} alt="" /> Sewa Mobil Dengan Supir di
                  Bali 12 Jam
                </span>
              </p>
              <p>
                <span>
                  <img src={CentangImg} alt="" /> Sewa Mobil Lepas Kunci di Bali
                  24 Jam
                </span>
              </p>
              <p>
                <span>
                  <img src={CentangImg} alt="" /> Sewa Mobil Jangka Panjang
                  Bulanan
                </span>
              </p>
              <p>
                <span>
                  <img src={CentangImg} alt="" /> Gratis Antar - Jemput Mobil di
                  Bandara
                </span>
              </p>
              <p>
                <span>
                  <img src={CentangImg} alt="" /> Layanan Airport Transfer /
                  Drop In Out
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurService;
