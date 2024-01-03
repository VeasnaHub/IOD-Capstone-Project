
function AddTripCard() {

    return (
        <div className="AddTripCard">
            <div className="title-top">
                <h1 className="white-font bold-font">ADD TRIP</h1>
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
                    <input className="check-box" type="checkbox" id="monday" name="monday" value="monday"></input>
                    <label htmlFor="monday">Monday</label>
                </div>
                <div>
                    <input className="check-box" type="checkbox" id="tuesday" name="tuesday" value="tuesday"></input>
                    <label htmlFor="tuesday">Tuesday</label>
                </div>
                <div>
                    <input className="check-box" type="checkbox" id="wednesday" name="wednesday" value="wednesday"></input>
                    <label htmlFor="wednesday">Wednesday</label>
                </div>
                <div>
                    <input className="check-box" type="checkbox" id="thursday" name="thursday" value="thursday"></input>
                    <label htmlFor="thursday">Thursday</label>
                </div>
            </div>
            <div className="service-box">
                <div>
                    <input className="check-box" type="checkbox" id="friday" name="friday" value="friday"></input>
                    <label htmlFor="friday">Friday</label>
                </div>
                <div>
                    <input className="check-box" type="checkbox" id="saturday" name="saturday" value="saturday"></input>
                    <label htmlFor="saturday">Saturday</label>
                </div>
                <div>
                    <input className="check-box" type="checkbox" id="sunday" name="sunday" value="sunday"></input>
                    <label htmlFor="sunday">Sunday</label>
                </div>
            </div>
            <div>
                <label>Departure Time:</label>
            </div>
            <div className="departure-time-input">
                <input type="text" name="departureTime" id="departureTime"></input>
            </div>
            <div>
                <label>Price($):</label>
            </div>
            <div className="price-input">
                <input type="number" name="price" id="price"></input>
            </div>
            <div>
                <label>Available Seats:</label>
            </div>
            <div className="available-seats-input">
                <input type="number" name="availableSeats" id="availableSeats"></input>
            </div>
            <button className="green-button trip-add-button">ADD</button>
        </div>
    )
}

export default AddTripCard;