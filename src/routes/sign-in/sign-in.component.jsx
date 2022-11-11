import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { 
    auth,
    signInWithGooglePopup, 
    signInWithGoogleRedirect,
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = ()=>{

    // useEffect(() => {
    //     async function callRedirect() {
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //         //console.log(response);
    //     }
    //     callRedirect();
    // }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log(user);
    //     //const userDocRef = await createUserDocumentFromAuth(user);
    // }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
        </div>
    )
}

export default SignIn;