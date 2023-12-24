import Footer from "../components/Footer";
import NavBarHome from "../components/NavBarHome";
import SignInForm from "../components/SignInForm";
import SignInUpPageBody from "../components/SignInUpPageBody";

function SignInPage() {
    return (
        <div>
            <NavBarHome />
            <SignInUpPageBody source="../src/assets/Signinpage.jpg" text="Driving green, sharing smiles with " alternative="photo of yellow car and people"><SignInForm /></SignInUpPageBody>
            <Footer />
        </div>
    )
}

export default SignInPage;