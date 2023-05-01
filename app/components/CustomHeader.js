import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function CustomHeader() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <MaterialCommunityIcons
          name="clock-outline"
          size={24}
          color="#FFFFFF"
          style={{marginLeft: 10}}
        /> */}
        <Text>ICON</Text>
        <Text style={{fontSize: 20}}>Custom Header</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
  },
});
