import LoggedNavBar from "../components/LoggedNavBar";
import Footer from "../components/Footer";
import TripList from "../components/TripList";
import SearchBar from "../components/SearchBar";


function SearchTripPage() {
    return (
        <div className="SearchTripPage">
            <LoggedNavBar/>
            <SearchBar />
            <TripList />
            <Footer />
        </div>
    )
}

export default SearchTripPage;