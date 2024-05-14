import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';

const DeleteAccount = () => {
  const [password, setPassword] = useState('');
  const [reason, setReason] = useState('');

  const handleDelete = () => {
    // 회원 탈퇴 처리 로직 구현

    // 회원 탈퇴 처리가 성공하면 아래 코드 실행
    Alert.alert('회원탈퇴가 완료되었습니다.');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={{flex: 1}}
    >
      <View style={styles.container}>
        <Text style={styles.title}>회원탈퇴</Text>
        <View style={styles.inputContainer}>
          <Text>비밀번호 확인</Text>
          <TextInput
            secureTextEntry
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChangeText={setPassword}
            style={{ marginBottom: 20, backgroundColor: 'white' }}
          />
          <Text>회원 탈퇴 이유</Text>
          <TextInput
            multiline
            numberOfLines={4} // 세로 크기 조절
            placeholder="탈퇴 이유를 적어주세요"
            value={reason}
            onChangeText={setReason}
            style={{ marginBottom: 20, backgroundColor: 'white', textAlignVertical: 'top' }} // textAlignVertical: 'top' 추가
          />
          <TouchableOpacity onPress={handleDelete} style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>회원 탈퇴</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 30,
    width: '80%',
  },
});

export default DeleteAccount;
