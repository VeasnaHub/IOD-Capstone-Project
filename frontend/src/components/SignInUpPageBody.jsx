import Logo from "./logo";

function SignInUpPageBody(props) {
    return (
        <div className="SignInUpPageBody body-container">
            <div className="body-item">
                <p className="l-font green-font light-font">{props.text}<Logo />!</p>
                <img className="body-item" src={props.source} alt={props.alternative} style={{ width: "100%", height: "auto" }}/>
            </div>
            <div className="body-item">
                {props.children}
            </div>
        </div>
    )
}

export default SignInUpPageBody;