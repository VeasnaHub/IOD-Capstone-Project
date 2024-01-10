import { useUserContext } from "../context/UserContext";
import { useState } from "react";
import axios from "axios";

function AddTripCard() {
  const { currentUser, handleUpdateUser } = useUserContext();
  const [errMsg, setErrMsg] = useState("");
  const [confirmMsg, setConfirmMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //// Extract data from the form
    const data = new FormData(event.currentTarget);

    const isEmptyInput = Array.from(data.values()).some(
      (value) => !value.trim()
    );

    // Display error message if any input is empty
    if (isEmptyInput) {
      setErrMsg("All input is required.");
      return;
    }

    // Add the driverId to the form data
    data.append("driverId", currentUser.id);

    // Process the serviceDay values as an array
    const serviceDays = Array.from(data.getAll("serviceDay"));
    data.delete("serviceDay");
    data.append("serviceDay", serviceDays);

    // Send the form data to the serve
    axios
      .post("/api/trips/add", Object.fromEntries(data.entries()))
      .then((response) => {
        let trip = response.data.data;

        console.log(trip);
        setErrMsg("");
        setConfirmMsg("Trip has been added. Thank you!");
      })
      .catch((err) => {
        console.log(err);
        setResult(err.message + ": " + err.response.data.result);
      });
  };

  return (
    <div>
      {confirmMsg ? (
        <p className="confirm-message">{confirmMsg}</p>
      ) : (
        <form className="AddTripCard" onSubmit={handleSubmit}>
          <div className="title-top">
            <h1 className="white-font bold-font">ADD TRIP </h1>
          </div>
          <div>
            <label>Departure:</label>
          </div>
          <div className="departure-input">
            <input type="text" name="departure" id="departure"></input>
          </div>
          <div>
            <label>Destination:</label>
          </div>
          <div className="destination-input">
            <input type="text" name="destination" id="destination"></input>
          </div>
          <div>
            <label>Service Day:</label>
          </div>
          <div className="service-box">
            <div>
              <input
                className="check-box"
                type="checkbox"
                id="monday"
                name="serviceDay"
                value=" Mon"
              ></input>
              <label htmlFor="monday">Monday</label>
            </div>
            <div>
              <input
                className="check-box"
                type="checkbox"
                id="tuesday"
                name="serviceDay"
                value=" Tue"
              ></input>
              <label htmlFor="tuesday">Tuesday</label>
            </div>
            <div>
              <input
                className="check-box"
                type="checkbox"
                id="wednesday"
                name="serviceDay"
                value=" Wed"
              ></input>
              <label htmlFor="wednesday">Wednesday</label>
            </div>
            <div>
              <input
                className="check-box"
                type="checkbox"
                id="thursday"
                name="serviceDay"
                value=" Thu"
              ></input>
              <label htmlFor="thursday">Thursday</label>
            </div>
          </div>
          <div className="service-box">
            <div>
              <input
                className="check-box"
                type="checkbox"
                id="friday"
                name="serviceDay"
                value=" Fri"
              ></input>
              <label htmlFor="friday">Friday</label>
            </div>
            <div>
              <input
                className="check-box"
                type="checkbox"
                id="saturday"
                name="serviceDay"
                value=" Sat"
              ></input>
              <label htmlFor="saturday">Saturday</label>
            </div>
            <div>
              <input
                className="check-box"
                type="checkbox"
                id="sunday"
                name="serviceDay"
                value=" Sun"
              ></input>
              <label htmlFor="sunday">Sunday</label>
            </div>
          </div>
          <div>
            <label>Departure Time:</label>
          </div>
          <div className="departure-time-input">
            <input type="time" name="departureTime" id="departureTime"></input>
          </div>
          <div>
            <label>Price($):</label>
          </div>
          <div className="price-input">
            <input type="number" name="unitPrice" id="unitPrice"></input>
          </div>
          <div>
            <label>Available Seats:</label>
          </div>
          <div className="available-seats-input">
            <input
              type="number"
              name="availableSeats"
              id="availableSeats"
            ></input>
          </div>
          <button className="green-button trip-add-button" type="submit">
            ADD
          </button>
          {errMsg && <p className="error-message">{errMsg}</p>}
          {confirmMsg && (
            <p className="confirm-message white-font">{confirmMsg}</p>
          )}
        </form>
      )}
    </div>
  );
}

export default AddTripCard;
