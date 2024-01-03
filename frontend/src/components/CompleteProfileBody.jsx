import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import axios from "axios";

function CompleteProfileBody() {

    const {currentUser, handleUpdateUser} = useUserContext();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = new FormData(event.currentTarget);

            const response = await axios.put(`/api/users/${currentUser.id}`, Object.fromEntries(data.entries()))
            const userUpdate = response.data.data;
    
            if (userUpdate) {
                handleUpdateUser({ ...currentUser, ...response.data.data });
                console.log(userUpdate);
                navigate('/registration');
                }
        } catch (error) {
                console.log(error)
        };
    };

    return (
        <div className="CompleteProfileBody in-body">
            <div>
                <h1>To insert placeholder for profile photo</h1>
                <button className="yellow-button">UPLOAD PHOTO</button>
            </div>
            <form className="complete-profile-form" onSubmit={handleSubmit}>
                <h1 className="green-font bold-font">COMPLETE YOUR PROFILE</h1>
                <label>First Name:</label>
                <input type="text" name="firstName" id="firstName"></input>
                <label>Last Name:</label>
                <input type="text" name="lastName" id="lastName"></input>
                <label>Base Location:</label>
                <input type="text" name="baseLocation" id="baseLocation"></input>
                <label>Profile Summary:</label>
                <input type="text" name="profileSummary" id="profileSummary"></input>
                <button className="green-button" type="submit">SAVE</button>
            </form>
        </div>
    )
}

export default CompleteProfileBody;