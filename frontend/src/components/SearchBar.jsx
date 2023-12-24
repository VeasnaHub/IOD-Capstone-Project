import Button from "./Button";

function SearchBar() {
    return (
        <div className="SearchBar" style={{ backgroundColor: "rgba(74, 97, 115, 0.1)" }}>
            <input placeholder="Leaving from"></input>
            <input placeholder="Going to"></input>
            <input placeholder="Select service day"></input>
            <Button name="FIND A RIDE" background="yellow-button" />
        </div>
    )
}

export default SearchBar;