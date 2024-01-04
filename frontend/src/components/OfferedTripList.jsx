import { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import useOfferedTrips from "../hooks/useOfferedTrip";

function OfferedTripList() {
  const { currentUser } = useUserContext();
  const { offeredTrips, message, fetchData } = useOfferedTrips(currentUser);

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (tripId) => {
    try {
      await axios.delete(`/api/trips/${tripId}`, {
        headers: { "x-access-token": currentUser.token },
      });
      fetchData();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="OfferedTripList in-body">
      {offeredTrips.length === 0 ? (
        <p>You have not offered any trip yet! Go Green with WAKA, click to offer a trip now!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Trip #</th>
              <th>Departure</th>
              <th>Destination</th>
              <th>Service Day</th>
              <th>Time</th>
              <th>Seats</th>
              <th>Unit Price</th>
              <th className="action-column">Action</th>
            </tr>
          </thead>
          <tbody>
            {offeredTrips.map((offeredTrip) => (
              <tr key={offeredTrip.id}>
                <td>{offeredTrip.id}</td>
                <td>{offeredTrip.departure}</td>
                <td>{offeredTrip.destination}</td>
                <td>{offeredTrip.serviceDay}</td>
                <td>{offeredTrip.departureTime}</td>
                <td>{offeredTrip.availableSeats}</td>
                <td>{offeredTrip.unitPrice} $</td>
                <td className="action-column">
                  <button className="green-button">Edit Trip</button>
                  <button
                    className="yellow-button"
                    onClick={() => handleDelete(offeredTrip.id)}
                  >
                    Delete Trip
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OfferedTripList;
