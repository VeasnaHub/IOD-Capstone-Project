import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import axios from "axios";

function CompleteProfileBody() {
  const { currentUser, handleUpdateUser } = useUserContext();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Extract form data using FormData
      const data = new FormData(event.currentTarget);

      // Make a PUT request to update user profile
      const response = await axios.put(
        `/api/users/${currentUser.id}`,
        Object.fromEntries(data.entries())
      );

      // Extract updated user data from the response
      const userUpdate = response.data.data;

      if (userUpdate) {
        // Update user context with the new dat
        handleUpdateUser({ ...currentUser, ...response.data.data });
        console.log(userUpdate);
        navigate("/registration");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="CompleteProfileBody in-body">
      <div>
        <h1>To upload a profile photo</h1>
        <button className="yellow-button">UPLOAD PHOTO</button>
      </div>
      <form className="complete-profile-form" onSubmit={handleSubmit}>
        <h1 className="green-font bold-font">COMPLETE YOUR PROFILE</h1>
        <label>First Name:</label>
        <input type="text" name="firstName" id="firstName" required></input>
        <label>Last Name:</label>
        <input type="text" name="lastName" id="lastName" required></input>
        <label>Base Location:</label>
        <input type="text" name="baseLocation" id="baseLocation"></input>
        <label>Profile Summary:</label>
        <input type="text" name="profileSummary" id="profileSummary"></input>
        <button className="green-button" type="submit">
          SAVE
        </button>
      </form>
    </div>
  );
}

export default CompleteProfileBody;
