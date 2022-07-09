import SignUp from "../../components/signUp/signup";
import LogIn from "../../components/log-in/login";
import "./sign-in-style.scss";

const SignIn = () => {
    return (
        <div className="signin">
            <LogIn />
            <SignUp />
        </div>
    );
};

export default SignIn;
