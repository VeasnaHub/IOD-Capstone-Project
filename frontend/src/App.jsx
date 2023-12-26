import './App.css'
import LoggedNavBar from './components/LoggedNavBar';
import BookingRequestPage from './pages/BookingRequestPage';
import BookingStatusPage from './pages/BookingStatusPage';
import CompleteProfilePage from './pages/CompleteProfilePage';
import LandingPage from './pages/LandingPage'
import LogOutPage from './pages/LogOutPage.jsx';
import RegistrationConfirmPage from './pages/RegistrationConfirmPage';
import SearchTripPage from './pages/SearchTripPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <>
    <LandingPage />
    <SignUpPage />
    <RegistrationConfirmPage />
    <SignInPage />
    <CompleteProfilePage />
    <SearchTripPage />
    <BookingStatusPage />
    <BookingRequestPage />
    <LogOutPage />
    </>
  )
}

export default App;
