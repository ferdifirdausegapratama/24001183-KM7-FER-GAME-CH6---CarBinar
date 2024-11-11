const JumboTron = () => {
  return (
    <div>
      <section id="jumbo_tron">
        <div className="my-5">
          <div className="p-5 text-center bg-body-tertiary">
            <div
              className="container py-5 rounded-3"
              style={{ backgroundColor: "#0d28a6" }}
            >
              <h1 className="text-white">Sewa Mobil di Jombang Sekarang</h1>
              <p className="col-md-8 mx-auto lead text-white fs-6 justify-content-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                className="btn btn-success px-5 mb-5 fw-bold"
                type="button"
                style={{ backgroundColor: "#5cb85f" }}
              >
                Mulai Sewa Mobil
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JumboTron;
