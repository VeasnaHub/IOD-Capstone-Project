import Logo from "./logo";

function LogOutPageBody() {
    return (
        <div className="LogOutPageBody">
            <div className="body-item">
                <p className="l-font green-font">You're contributing to a <span className="green-font l-font bold-font">GREENER </span><span className="yellow-font l-font bold-font">FUTURE</span>, with <Logo />.</p>
                <p className="l-font green-font">Safe travels, and thank you for being a part of our <span className="green-font l-font bold-font">COMMUNIT</span><span className="yellow-font l-font bold-font">Y</span>!"</p>
            </div>
            <div className="body-item">
                <img src="./src/assets/Logoutpage.jpg" style={{ width: "110%", height: "auto" }}/>
            </div>
        </div>
    )
}

export default LogOutPageBody;
