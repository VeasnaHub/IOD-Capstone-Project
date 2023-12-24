import Footer from "../components/Footer";
import NavBarHome from "../components/NavBarHome";
import SignUpForm from "../components/SignUpForm";
import SignInUpPageBody from "../components/SignInUpPageBody";

function SignUpPage() {
    return (
        <>
        <NavBarHome />
        <SignInUpPageBody source="../src/assets/Signuppage.png" text="Your sustainable journey begins here with " alternative="photo of yellow car and people"><SignUpForm /></SignInUpPageBody>
        <Footer />
        </>
    )
}

export default SignUpPage;