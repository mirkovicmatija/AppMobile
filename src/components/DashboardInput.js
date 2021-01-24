import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import AppText from './AppText';
import DashboardColors from '../constants/DashboardColors';
import LinearGradient from 'react-native-linear-gradient';
import Constants from '../constants/Constants';

<<<<<<< HEAD
const inputHeight = Constants.height > 700 ? 35 : 30;
=======
const inputHeight = Constants.height > 700 ? 45 : 35;
>>>>>>> 54fe38e2940cf8a6e1a5ad28db549f1866adb7e6

export default function DashboardInput(props) {
  return (
    <View style={styles.container}>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          selectionColor={DashboardColors.white}
          placeholder={props.placeholder}
          placeholderTextColor={DashboardColors.white}
          {...props}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    borderWidth: 0.8,
    borderColor: DashboardColors.white,
    borderRadius: 5,
    overflow: 'hidden',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: DashboardColors.white
  },
  input: {
    color: DashboardColors.white,
    borderColor: DashboardColors.white,
    width: '100%',
    padding: 0,
    height: inputHeight,
    paddingLeft: inputHeight / 3,
    paddingRight: 5,
    fontFamily: 'Ubuntu-Regular',
    fontSize: 14
  },
});
