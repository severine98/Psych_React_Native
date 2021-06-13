import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {ThemeProvider, Button as LoginButton} from 'react-native-elements';
import {spacing, typography} from '../styles';
import {
  AppleButton,
  appleAuth,
} from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {
  authWithEmail,
  authWithGoogle,
  onAppleButtonPress,
  signOut,
} from '../utils';

GoogleSignin.configure({
  webClientId:
    '32178263078-bmd8uo421uri8vi23p5fd5l4ospqimk4.apps.googleusercontent.com',
});

export const Landing = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const myUser = auth().currentUser;
  console.log('myUser', myUser);

  if (initializing) return null;

  const theme = {
    Button: {
      raised: true,
      backgroundColor: 'red',
    },
  };

  if (!user) {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              paddingHorizontal: spacing.large,
            }}>
            <Text>Sign up</Text>
            <TextInput
              onChangeText={value => setUsername(value)}
              placeholder="Enter email"
              value={username}
              style={[styles.input, {marginBottom: spacing.base}]}
            />
            <TextInput
              onChangeText={value => setPassword(value)}
              placeholder="Enter password"
              value={password}
              style={styles.input}
            />
            <LoginButton
              containerStyle={{borderRadius: 50, marginTop: spacing.huge}}
              buttonStyle={styles.buttonStyle}
              title={'Login'}
              onPress={() => authWithEmail(username, password)}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Or connect with</Text>
              <AppleButton
                buttonStyle={AppleButton.Style.BLACK}
                buttonType={AppleButton.Type.SIGN_IN}
                cornerRadius={50}
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
              <GoogleSigninButton
                onPress={authWithGoogle}
                color={GoogleSigninButton.Color.Dark}
              />
            </View>
          </View>
        </SafeAreaView>
      </ThemeProvider>
    );
  }

  {
    if (user)
      return (
        <View>
          <Text>YOU ARE SIGNED IN WITH {user.email}</Text>
          <TouchableOpacity onPress={signOut}>
            <Text>SIGN OUT</Text>
          </TouchableOpacity>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  text: {
    ...typography.h6,
    marginBottom: spacing.base,
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: spacing.baseSmall,
    paddingHorizontal: spacing.base,
  },
  buttonStyle: {
    backgroundColor: 'rgba(116,124,204,1)',
    borderRadius: 50,
  },
});
