import LoggedNavBar from "../components/LoggedNavBar";
import Footer from "../components/Footer";
import SearchTripBody from "../components/SearchTripBody";
import SearchBar from "../components/SearchBar";


function SearchTripPage() {
    return (
        <div className="SearchTripPage">
            <LoggedNavBar />
            <SearchBar />
            <SearchTripBody />
            <Footer />
        </div>
    )
}

export default SearchTripPage;