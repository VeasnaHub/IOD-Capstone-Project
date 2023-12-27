import Button from "./Button";

function TripCard (props) {
    return (
        <div className="TripCard">
            <p>Trip ID: {props.id}</p>
            <p>Departure: {props.id}</p>
            <p>Destination: {props.id}</p>
            <p>Service Day: {props.id}</p>
            <p>Time: {props.id}</p>
            <p>Price: {props.id}</p>
            <p>Available Seats: {props.id}</p>
            <label>Enter number of seats to request booking:</label>
            <input style={{ border: "1px solid rgba" }}></input>
            <Button name="MAKE BOOKING" background="green-button" />
        </div>
    )
}

export default TripCard;
