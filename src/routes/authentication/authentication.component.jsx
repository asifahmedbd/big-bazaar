import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { 
    auth,
    signInWithGooglePopup, 
    signInWithGoogleRedirect,
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = ()=>{

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

    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log(user);
    //     //const userDocRef = await createUserDocumentFromAuth(user);
    // }

    return(
        <div>
            <h1>Sign In Page</h1>
            <SignInForm />
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
        </div>
    )
}

export default Authentication;