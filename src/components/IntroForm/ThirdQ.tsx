import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {colors, spacing, widthPct} from '../../styles';

export const ThirdQ = () => {
  return (
    <View style={styles.container}>
      <Button
        containerStyle={{width: widthPct(35)}}
        buttonStyle={[styles.buttonStyle, {backgroundColor: colors.black}]}
        titleStyle={styles.buttonTitle}
        title={<Text style={styles.buttonText}>Extrovert</Text>}
        onPress={() => console.log('Apple sign-in complete!')}
      />
      <Button
        containerStyle={{width: widthPct(35)}}
        buttonStyle={[styles.buttonStyle, {backgroundColor: colors.black}]}
        titleStyle={styles.buttonTitle}
        title={<Text style={styles.buttonText}>Introvert</Text>}
        onPress={() => console.log('Apple sign-in complete!')}
      />
      <Button
        containerStyle={{width: widthPct(35)}}
        buttonStyle={[styles.buttonStyle, {backgroundColor: colors.black}]}
        titleStyle={styles.buttonTitle}
        title={<Text style={styles.buttonText}>In the middle</Text>}
        onPress={() => console.log('Apple sign-in complete!')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: colors.purpleDark,
    borderRadius: 50,
    height: widthPct(30),
    marginTop: spacing.base,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
