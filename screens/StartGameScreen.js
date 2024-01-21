import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#72063c',
    elevation: 16, // shadow for android
    shadowColor: 'black', // for IOS
    shadowOffset: { width: 0, height: 2 }, // for IOS
    shadowRadius: 6, // for IOS
    shadowOpacity: 0.25, // for IOS
  },
});

export default StartGameScreen;
