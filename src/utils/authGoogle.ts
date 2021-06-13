import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const onGoogleButtonPress = async () => {
  console.log('RUN FUNCTION');
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  console.log('idToken', idToken);

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  console.log('googleCredential', googleCredential);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

export const authWithGoogle = () => {
  onGoogleButtonPress()
    .then(() => console.log('Signed in with Google!'))
    .catch(err => console.log(err));
};
