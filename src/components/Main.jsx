import CarImg from "./../assets/img_car.png";

const Main = () => {
  return (
    <div>
      <section id="home">
        <div className="container mt-5">
          <div className="row py-5 g-4 pb-2">
            <div className="col-md-6 my-auto pe-5 pt-5 pb-5">
              <h2>Sewa & Rental Mobil Terbaik di kawasan Jombang</h2>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <a href="/cars" className="btn btn-utama">
                Mulai Sewa Mobil
              </a>
            </div>
            <div className="col-md-6 py-5 pb-0">
              <img src={CarImg} className="img-fluid" alt="Car Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
