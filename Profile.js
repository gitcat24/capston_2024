import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function ProfileEdit() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Email, setEmail] = useState('');


  const handleProfileUpdate = () => {
    // 회원정보 수정 로직 처리
    console.log('회원정보 수정 로직 처리');
  };

  return (
    <View style={styles.container}>
      <Text>회원정보 수정</Text>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        onChangeText={setUserId}
        value={userId}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="전화번호"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="이메일"
        secureTextEntry
        onChangeText={setEmail}
        value={Email}
      />
      <Button title="확인" onPress={handleProfileUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});