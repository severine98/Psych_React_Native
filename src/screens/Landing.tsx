import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {spacing, typography} from '../styles';

export const Landing = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <View
        style={{
          paddingHorizontal: spacing.base,
        }}>
        <Text>HELLO</Text>
        <Text style={typography.h2SemiBold}>Welcome to my app</Text>
        {/* <Button /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    ...typography.h6,
    marginBottom: spacing.base,
  },
});
