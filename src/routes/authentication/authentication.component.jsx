import { useEffect } from "react";
import "./authentication.styles.scss";
import { getRedirectResult } from "firebase/auth";
import {
    auth,
    signInWithGooglePopup,
    signinwithGoogleRedirect,
    createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
    useEffect(async () => {
        const response = await getRedirectResult(auth);
        // console.log(response);
        if (response) {
            const userDocRef = await createUserDocFromAuth(response.user);
        }
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    };

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;
