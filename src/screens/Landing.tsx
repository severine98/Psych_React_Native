import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {spacing, typography} from '../styles';
import {
  AppleButton,
  appleAuth,
} from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const Landing = () => {
  const theme = {
    Button: {
      raised: true,
    },
  };

  const onAppleButtonPress = async () => {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw 'Apple Sign-In failed - no identify token returned';
    }

    // Create a Firebase credential from the response
    const {identityToken, nonce} = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );

    // Sign the user in with the credential
    return auth().signInWithCredential(appleCredential);
  };

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
        <View
          style={{
            paddingHorizontal: spacing.base,
          }}>
          <Text>HELLO</Text>
          <Text style={typography.h2SemiBold}>Welcome to my app</Text>
          {/* <Button title={'Login'} />
          <Button title={'Sign up'} /> */}
          <AppleButton
            buttonStyle={AppleButton.Style.WHITE}
            buttonType={AppleButton.Type.SIGN_IN}
            style={{
              width: 160,
              height: 45,
            }}
            onPress={() =>
              onAppleButtonPress().then(() =>
                console.log('Apple sign-in complete!'),
              )
            }
          />
          <Button
            title="Google Sign-In"
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log('Signed in with Google!'),
              )
            }
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    ...typography.h6,
    marginBottom: spacing.base,
  },
});
