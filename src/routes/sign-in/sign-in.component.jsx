import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import './sign-in.styles.scss';

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
        </div>
    )
};

export default SignIn;