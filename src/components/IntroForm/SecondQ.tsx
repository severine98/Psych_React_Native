import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {colors, widthPct} from '../../styles';

export const SecondQ = () => {
  return (
    <View style={styles.container}>
      <Button
        containerStyle={{width: widthPct(35)}}
        buttonStyle={[styles.buttonStyle, {backgroundColor: colors.black}]}
        titleStyle={styles.buttonTitle}
        title={<Text style={styles.buttonText}> Yes</Text>}
        onPress={() => console.log('Apple sign-in complete!')}
      />
      <Button
        containerStyle={{width: widthPct(35)}}
        buttonStyle={[styles.buttonStyle, {backgroundColor: colors.black}]}
        titleStyle={styles.buttonTitle}
        title={<Text style={styles.buttonText}>No</Text>}
        onPress={() => console.log('Apple sign-in complete!')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  buttonStyle: {
    backgroundColor: colors.purpleDark,
    borderRadius: 50,
    marginTop: widthPct(30),
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
