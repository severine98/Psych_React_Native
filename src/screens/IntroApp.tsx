import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {colors, spacing, typography} from '../styles';

export const IntroApp = ({navigation, route}) => {
  const name = 'Severine';

  const handleNext = async () => {
    navigation.navigate('IntroCarouselForm');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity onPress={handleSignOut}>
        <Text>SIGN OUT</Text>
      </TouchableOpacity> */}
      <Text style={styles.text}>
        Hi <Text style={[styles.text, {color: colors.purpleDark}]}>{name}</Text>
        ,
      </Text>
      <Text style={styles.text}>Welcome to this app!</Text>
      <Text style={styles.text}>
        To get you started, lets go through some questions.
      </Text>
      <View style={styles.bottomContainer}>
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonText}
          title={'Lets go!'}
          onPress={handleNext}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpleLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...typography.h2,
    fontWeight: 'bold',
    lineHeight: spacing.huge,
    color: colors.white,
    textAlign: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: spacing.large,
  },
  buttonStyle: {
    backgroundColor: colors.purpleDark,
    borderRadius: 50,
  },
  buttonText: {
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.small,
  },
});
