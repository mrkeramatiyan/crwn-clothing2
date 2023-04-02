import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import './sign-in.styles.scss';

import SingUpForm from '../../components/sing-up-form/sing-up-form.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        try {
            const {user} = await signInWithGooglePopup();
            createUserDocumentFromAuth(user);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sing In with google
            </button>
            <SingUpForm />
        </div>
    )
};

export default SignIn;