import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RegistrationScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Task 4: Year of Birth Input State
  const [birthYear, setBirthYear] = useState("");

  const handleReview = () => {
    // Check if all fields are filled
    if (!userName || !email || !phoneNumber || !password || !confirmPassword || !birthYear) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // Task 4: Calculate Age dynamically
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - parseInt(birthYear);

    // Pass data as parameters to the Review screen
    router.push({
      pathname: '/review',
      params: { userName, email, phoneNumber, age: calculatedAge },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      {/* Task 4: Year of Birth Input */}
      <TextInput
        style={styles.input}
        placeholder="Year of Birth"
        keyboardType="numeric"
        value={birthYear}
        onChangeText={setBirthYear}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Button title="Review Details" onPress={handleReview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 8 }
});
