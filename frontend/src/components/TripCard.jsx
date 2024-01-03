import Button from "./Button";

function TripCard (props) {
    return (
        <div className="TripCard">
            <p>Trip ID: {props.id}</p>
            <p>Departure: {props.departure}</p>
            <p>Destination: {props.destination}</p>
            <p>Service Day: {props.serviceDay}</p>
            <p>Time: {props.time}</p>
            <p>Price: {props.price}</p>
            <p>Available Seats: {props.availableSeats}</p>
            <label>Enter number of seats to request booking:</label><br/>
            <input style={{ border: "1px solid rgba", width: "50px"}}></input>
            <Button name="MAKE BOOKING" background="green-button" />
        </div>
    )
}

export default TripCard;
