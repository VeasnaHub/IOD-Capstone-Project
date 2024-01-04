import { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function TripList() {

    const [trips, setTrips] = useState([]);
    const [result, setResult] = useState('');
    const [selectedTripId, setSelectedTripId] = useState(null);
    const {currentUser} = useUserContext();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const headers = { "x-access-token": currentUser.token }

    useEffect(() => {
        axios.get('/api/trips', {headers: headers})
        .then(response => { setTrips(response.data.data);
        console.log(data.data)})
        .catch(err => setMessage(err.message))
    }, [])

    const handleSubmit =(event) => {
        event.preventDefault();

        if (!selectedTripId) {
            setResult("Please select a trip");
            return;
          }

        const data = new FormData(event.currentTarget);
        data.append('passengerId', (currentUser.id));
        data.append('tripId', selectedTripId)

        axios.post('/api/bookings/request', Object.fromEntries(data.entries()))
        .then(response => {
            let result = response.data.result;
            let booking = response.data.data;

            console.log(booking);
            setResult(result);

            if (booking) {
                navigate('/bookings')
            }
        }).catch(err => {
            console.log(err)
            setResult(err.message + ': ' + err. response.data.result);
        })
    };

    return (
        <form className="TripList" onSubmit={handleSubmit}>
            {trips.map(trip => (
                <div className="trip-card" key={trip.id} onClick={() => setSelectedTripId(trip.id)}>
                    <p>Trip ID: {trip.id}</p>
                    <p>Departure: {trip.departure}</p>
                    <p>Destination: {trip.destination}</p>
                    <p>Service Day: {trip.serviceDay}</p>
                    <p>Time: {trip.departureTime}</p>
                    <p>Price: {trip.unitPrice} $</p>
                    <p>Available Seats: {trip.availableSeats}</p>
                    <label>Enter number of seats to request booking:</label><br/>
                    <input type="number" name="requestedSeat" id="requestedSeat" style={{ border: "1px solid rgba", width: "50px"}}></input>
                    <button className="green-button" type="submit">MAKE BOOKING</button>
                </div>
            ))}
        </form>
    )
}

export default TripList;