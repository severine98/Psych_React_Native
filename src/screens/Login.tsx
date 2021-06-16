import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, spacing, typography, widthPct} from '../styles';
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

export const Login = ({navigation}) => {
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

  const handleLogin = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const myUser = auth().currentUser;

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
        <SafeAreaView style={styles.container}>
          <View style={{paddingHorizontal: spacing.large}}>
            <Text style={styles.title}>Login</Text>
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
            <Button
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.buttonStyle}
              titleStyle={{fontSize: 15, fontWeight: 'bold'}}
              title={'Login'}
              onPress={() => authWithEmail(username, password)}
            />
            <View style={styles.bottomContainer}>
              <Text style={[styles.centeredWhiteText]}>Or connect with</Text>
              <View style={styles.buttonsContainer}>
                <Button
                  containerStyle={{borderRadius: 50, width: widthPct(35)}}
                  buttonStyle={[
                    styles.buttonStyle,
                    {backgroundColor: 'rgba(72, 133, 237, 1)'},
                  ]}
                  titleStyle={styles.buttonTitle}
                  title={
                    <>
                      <Icon name="google" size={20} color="white" />
                      <Text style={styles.buttonText}>Google</Text>
                    </>
                  }
                  onPress={authWithGoogle}
                />
                <Button
                  containerStyle={{borderRadius: 50, width: widthPct(35)}}
                  buttonStyle={[
                    styles.buttonStyle,
                    {backgroundColor: 'rgba(0, 0, 0, 1)'},
                  ]}
                  titleStyle={styles.buttonTitle}
                  title={
                    <>
                      <Icon name="apple" size={20} color="white" />
                      <Text style={styles.buttonText}> Apple</Text>
                    </>
                  }
                  onPress={() =>
                    onAppleButtonPress().then(() =>
                      console.log('Apple sign-in complete!'),
                    )
                  }
                />
              </View>
              <Text
                style={[
                  styles.centeredWhiteText,
                  {paddingVertical: spacing.small},
                ]}>
                Don't have an account yet?
              </Text>
              <TouchableOpacity onPress={handleLogin}>
                <Text
                  style={[
                    styles.centeredWhiteText,
                    {color: 'rgba(116,124,204,1)'},
                  ]}>
                  Sign up
                </Text>
              </TouchableOpacity>
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
  container: {
    flex: 1,
    backgroundColor: 'rgba(173,197,248,255)',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: spacing.huge,
  },
  text: {
    ...typography.h6,
    marginBottom: spacing.base,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: spacing.baseSmall,
    paddingHorizontal: spacing.base,
  },
  bottomContainer: {
    justifyContent: 'center',
    marginTop: widthPct(20),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing.base,
  },
  buttonContainer: {
    borderRadius: 50,
    marginTop: spacing.huge,
  },
  buttonStyle: {
    backgroundColor: 'rgba(116,124,204,1)',
    borderRadius: 50,
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: spacing.small,
  },
  centeredWhiteText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
