import { useState } from "react";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import {
    createAuthUserWithEmailandPassword,
    createUserDocFromAuth,
} from "../../utils/firebase/firebase";
import "./sign-up-style.scss";

const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUp = () => {
    const [formField, setForm] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formField;

    const resetFormFeild = () => {
        setForm(defaultFormField);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({ ...formField, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password don't match ");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailandPassword(
                email,
                password
            );

            await createUserDocFromAuth(user, { displayName });
            resetFormFeild();
        } catch (error) {
            if (error.code === "auth/email-already-in-use")
                alert("cannot create user, email already use ");
            else console.error("user create error ", error);
        }
    };

    return (
        <div className="sign-up">
            <h2>Don't have an account </h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type="submit">Sign UP </Button>
            </form>
        </div>
    );
};

export default SignUp;
