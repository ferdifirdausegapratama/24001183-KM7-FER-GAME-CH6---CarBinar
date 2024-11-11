import { useState, useEffect } from "react";
import UserIcon from "./../assets/fi_users.png";
import CalenderIcon from "./../assets/fi_calendar.png";
import SettingsIcon from "./../assets/fi_settings.png";
import axios from "axios";

const SearchCar = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [driverType, setDriverType] = useState("default");
  const [date, setDate] = useState("");
  const [pickupTime, setPickupTime] = useState("false");
  const [passengerCount, setPassengerCount] = useState(0);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [noCarsAvailable, setNoCarsAvailable] = useState(false); // State for no cars available

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/cars");
        setCars(response.data);
        setFilteredCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading cars:", error);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleFilter = () => {
    setLoading(true);
    setNoCarsAvailable(false);

    setTimeout(() => {
      let filtered = [...cars];
      console.log("Initial cars:", filtered);

      // Filter berdasarkan tipe driver
      if (driverType !== "default") {
        filtered = filtered.filter((car) =>
          driverType === "true" ? car.available : !car.available
        );
        console.log("After driver type filter:", filtered);
      }

      // Filter berdasarkan tanggal
      if (date !== "") {
        filtered = filtered.filter(
          (car) => new Date(car.availableAt).toISOString().slice(0, 10) === date
        );
        console.log("After date filter:", filtered);
      }

      // Filter berdasarkan waktu pickup
      if (pickupTime !== "false") {
        filtered = filtered.filter((car) =>
          car.options ? car.options.includes(pickupTime) : false
        );
        console.log("After pickup time filter:", filtered);
      }

      // Filter berdasarkan jumlah penumpang
      if (passengerCount > 0) {
        filtered = filtered.filter((car) => car.capacity >= passengerCount);
        console.log("After passenger count filter:", filtered);
      }

      setFilteredCars(filtered);
      setLoading(false);

      if (filtered.length === 0) {
        setNoCarsAvailable(true);
      }
    }, 500);
  };

  return (
    // Filter
    <div>
      <section className="search-car">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="row search-card mx-lg-5 py-3 px-4">
                <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                  <label>Tipe Driver</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={driverType}
                    onChange={(e) => setDriverType(e.target.value)}
                  >
                    <option value="default">Pilih Tipe Driver</option>
                    <option value="true">Dengan Supir</option>
                    <option value="false">Tanpa Supir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label>Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto search-time">
                  <label>Pilih Waktu</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                  >
                    <option value="false">Pilih Waktu</option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label className="fw-light">
                    Jumlah Penumpang (optional)
                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control border-end-0"
                      placeholder="Jumlah Penumpang"
                      value={passengerCount}
                      onChange={(e) =>
                        setPassengerCount(parseInt(e.target.value))
                      }
                    />
                    <span className="input-group-text bg-white">
                      <img src={UserIcon} width="20px" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-xl-auto col-md-2 pt-4">
                  <button className="btn btn-utama" onClick={handleFilter}>
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* List Cars */}
      <section className="cars">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="row" id="cars-container">
                {loading ? (
                  // Loading indicator
                  <div className="text-center">Loading...</div>
                ) : noCarsAvailable ? (
                  // No cars available message
                  <div className="text-center">No cars available</div>
                ) : (
                  // Show cars
                  filteredCars.map((car) => (
                    <div className="card px-2 py-4" key={car.id}>
                      <img
                        src={`/src/assets/${car.image}`}
                        className="card-img-top mt-4"
                        alt="Car Image"
                      />
                      <div className="card-body">
                        <h5 className="card-title fs-6">{`${car.manufacture}/${car.model}`}</h5>
                        <h5 className="card-title fs-5 fw-bold">
                          Rp {car.rentPerDay} / hari
                        </h5>
                        <p className="cars__p">{car.description}</p>
                        <div>
                          <p className="">
                            <img src={UserIcon} width="20px" alt="Users Icon" />
                            <span className="ps-2">{car.capacity} Orang</span>
                          </p>
                          <p className="">
                            <img
                              src={SettingsIcon}
                              width="20px"
                              alt="Settings Icon"
                            />
                            <span className="ps-2">{car.transmission}</span>
                          </p>
                          <p className="">
                            <img
                              src={CalenderIcon}
                              width="20px"
                              alt="Calendar Icon"
                            />
                            <span className="ps-2">Tahun {car.year}</span>
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-utama"
                          style={{ width: "100%" }}
                        >
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchCar;
