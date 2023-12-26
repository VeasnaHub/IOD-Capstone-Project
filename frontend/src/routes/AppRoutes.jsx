import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import CompleteProfilePage from "../pages/CompleteProfilePage";
import RegistrationConfirmPage from "../pages/RegistrationConfirmPage";
import SearchTripPage from "../pages/SearchTripPage";
import BookingStatusPage from "../pages/BookingStatusPage";
import BookingRequestPage from "../pages/BookingRequestPage";
import LogOutPage from "../pages/LogOutPage";
import ViewAddTripPage from "../pages/ViewAddTripPage";

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<LandingPage {...props} />} />
            <Route path="/signin" element={<SignInPage {...props} />} />
            <Route path="/signup" element={<SignUpPage {...props} />} />
            <Route path="/profile" element={<CompleteProfilePage {...props} />} />
            <Route path="/registration" element={<RegistrationConfirmPage {...props} />} />
            <Route path="/trips" element={<SearchTripPage {...props} />} />
            <Route path="/bookings" element={<BookingStatusPage {...props} />} />
            <Route path="/requests" element={<BookingRequestPage {...props} />} />
            <Route path="/offeredtrips" element={<ViewAddTripPage {...props} />} />
            <Route path="/loggedout" element={<LogOutPage {...props} />} />
        </Routes>
    )
}

export default AppRoutes;