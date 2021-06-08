import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';
import {spacing, typography} from '../styles';

export const Landing = () => {
  const theme = {
    Button: {
      raised: true,
    },
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
          <Button title={'Login'} />
          <Button title={'Sign up'} />
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
