import { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import useTripLists from "../hooks/useTripLists";

function TripList() {
  const [selectedTripId, setSelectedTripId] = useState(null);
  const { currentUser } = useUserContext();
  const { tripLists, message, fetchData } = useTripLists(currentUser);
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedTripId) {
      setResult("Please select a trip");
      return;
    }

    const data = new FormData(event.currentTarget);

    data.append("passengerId", currentUser.id);
    data.append("tripId", selectedTripId);

    axios
      .post("/api/bookings/request", Object.fromEntries(data.entries()))
      .then((response) => {
        let result = response.data.result;
        let booking = response.data.data;

        console.log(booking);
        setResult(result);

        if (booking) {
          navigate("/bookings");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setResult(err.message + ": " + err.response.data.result);
      });
  };

  console.log(tripLists);
  const filteredTrips = tripLists.filter(
    (trip) => trip.driverId !== currentUser.id
  );
  console.log(filteredTrips);

  return (
    <div className="in-body">
      {filteredTrips.length === 0 ? (
        <div className="no-trip">
          <p className="body-item">
            Sorry, there is currently no trip being offered. Please come back
            and visit the page later!
          </p>
          <img className="body-item"
            src="../src/assets/Searchtrippage.jpg"
            style={{ width: "500px", height: "auto" }}
          />
        </div>
      ) : (
        <div className="TripList">
          {filteredTrips.map((trip) => (
            <form
              onSubmit={handleSubmit}
              className="trip-card"
              key={trip.id}
              onClick={() => setSelectedTripId(trip.id)}
            >
              <div className="trip-card-section1" style={{ lineHeight: "1.1" }}>
                <p>Trip ID</p>
                <p>Departure</p>
                <p>Destination</p>
                <p>Service Day</p>
                <p>Depart Time</p>
                <p>Price</p>
                <p>Avail Seats</p>
              </div>
              <div className="trip-card-section2" style={{ lineHeight: "1.1" }}>
                <p className="bold-font">{trip.id}</p>
                <p className="bold-font">{trip.departure}</p>
                <p className="bold-font">{trip.destination}</p>
                <p className="bold-font">{trip.serviceDay}</p>
                <p className="bold-font">{trip.departureTime}</p>
                <p className="bold-font">{trip.unitPrice} $</p>
                <p className="bold-font">{trip.availableSeats}</p>
              </div>
              <div className="trip-card-section3">
                <p>Photo</p>
              </div>
              <div className="trip-card-section4">
                <label>Enter Booking Seat(s):</label>
                <input
                  type="number"
                  name="requestedSeat"
                  id="requestedSeat"
                  style={{ border: "1px solid rgba", width: "50px" }}
                  required
                  min="1"
                  max={trip.availableSeats}
                ></input>
                <button className="green-button" type="submit">
                  MAKE BOOKING
                </button>
              </div>
            </form>
          ))}
        </div>
      )}
    </div>
  );
}

export default TripList;
