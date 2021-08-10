import React from 'react';
import {TextInput} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {colors, widthPct} from '../../styles';

export const FourthQ = () => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter their name"
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
