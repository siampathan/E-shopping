import { useState } from "react";
import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPE_CLASS } from "../button/button";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthUserWithEmailandPassword,
} from "../../utils/firebase/firebase";
import "./login-style.scss";

const defaultFormField = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [formField, setForm] = useState(defaultFormField);
  const { email, password } = formField;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFeild = () => {
    setForm(defaultFormField);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailandPassword(
        email,
        password
      );

      resetFormFeild();
    } catch (error) {
      if (error.code === "auth/wrong-password") alert("Enter wrong password ");
      else if (error.code === "auth/user-not-found")
        console.log("Enter wrong email");
      else console.log(error);
    }
  };

  return (
    <div className="login">
      <h2>I have an account </h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons">
          <Button type="submit">Sign In </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASS.google}
            onClick={signInWithGoogle}
          >
            Google signin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
