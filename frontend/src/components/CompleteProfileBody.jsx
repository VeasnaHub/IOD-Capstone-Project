import { useNavigate } from "react-router-dom";
import Button from "./Button";

function CompleteProfileBody() {

    const navigate = useNavigate();

    return (
        <div className="CompleteProfileBody in-body">
            <div>
                <h1>To insert placeholder for profile photo</h1>
                <Button background="yellow-button" name="UPDATE PHOTO" />
            </div>
            <div>
                <h1 className="green-font bold-font">COMPLETE YOUR PROFILE</h1>
                <label>First Name:</label><br/>
                <input type="text"></input><br/>
                <label>Last Name:</label><br/>
                <input type="text"></input><br/>
                <label>Base Location:</label><br/>
                <input type="text"></input><br/>
                <label>Profile Summary:</label><br/>
                <input type="text"></input><br/>
                <button className="green-button" onClick={() => navigate("/registration")}>SAVE</button>
            </div>
        </div>
    )
}

export default CompleteProfileBody;