import { useEffect, useState } from "react";
import TripCard from "./TripCard";
import axios from "axios";
import { useUserContext } from "../context/UserContext";

function TripList() {

    const [trips, setTrips] = useState([]);
    const {currentUser} = useUserContext();
    const [message, setMessage] = useState('');
    const headers = { "x-access-token": currentUser.token }

    useEffect(() => {
        axios.get('/api/trips', {headers: headers})
        .then(response => { setTrips(response.data.data);
        console.log(data.data)})
        .catch(err => setMessage(err.message))
    }, [])


    return (
        <div className="TripList">
            {trips.map(trip => (
                <div className="TripCard" key={trip.id}>
                    <p>Trip ID: {trip.id}</p>
                    <p>Departure: {trip.departure}</p>
                    <p>Destination: {trip.destination}</p>
                    <p>Service Day: {trip.serviceDay}</p>
                    <p>Time: {trip.time}</p>
                    <p>Price: {trip.price}</p>
                    <p>Available Seats: {trip.availableSeats}</p>
                    <label>Enter number of seats to request booking:</label><br/>
                    <input style={{ border: "1px solid rgba", width: "50px"}}></input>
                    <button className="green-button">MAKE BOOKING</button>
                </div>
            ))}
        </div>
    )
}

export default TripList;