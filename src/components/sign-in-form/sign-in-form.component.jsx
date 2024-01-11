import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./sign-in-form.styles.scss";
// import { UserContext } from "../../context/user.context";
import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    createUserDocFromAuth,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            // setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                alert("Incorrect password for email");
            } else if (error.code === "auth/") {
            }
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const signinwithGoogle = async () => {
        await signInWithGooglePopup();
    };
    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    required
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={email}
                />
                <FormInput
                    label="Password"
                    required
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signinwithGoogle}
                        type="submit"
                    >
                        Sign in with google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
