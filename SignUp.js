import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Modal, Pressable, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container }>
      <Text style={styles.title}>회원가입</Text>
      <View style={styles.inputContainer}>
      <Text style={styles.text}>아이디</Text>
      <TextInput
        style={[styles.input, styles.roundedInput]}
        placeholder="아이디를 입력하세요"
        onChangeText={setUserId}
        value={userId}
      />
      {/* 아이디 중복확인 버튼 */}
      <Text style={styles.text}>비밀번호</Text>
      <TextInput
        style={[styles.input, styles.roundedInput]}
        placeholder="비밀번호를 입력하세요"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Text style={styles.text}>소속학과</Text>
      <TextInput
        style={[styles.input, styles.roundedInput]}
        placeholder="소속학과를 입력하세요"
        onChangeText={setDepartment}
        value={department}
      />
      <Text style={styles.text}>전화번호</Text>
      <TextInput
        style={[styles.input, styles.roundedInput]}
        placeholder="전화번호를 입력하세요"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <View style={{ marginTop: 10, width: '80%', alignSelf: 'center'}}>
      <TouchableOpacity
            style={styles.touchableButton}
            onPress={() => {
              setModalVisible(true);
              console.log('회원가입 로직 처리');
            }}
          >
       <Text style={styles.touchableButtonText}>회원가입</Text>{/*버튼의 자체적인 기본 스타일덕분에 모양이 바뀌지 않는 문제가 발생해 touchableOpatcitiy와 text를 이용해 구현*/}
  </TouchableOpacity>
</View>
      
      </View>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>회원가입이 완료되었습니다!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>확인</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  roundedInput: {
    borderRadius: 10, // 입력 필드의 모서리를 둥글게 만듭니다.
  },
  inputContainer: {
    backgroundColor: '#f0f0f0', // 입력 필드와 버튼을 감싸는 View의 배경색을 연한 회색으로 변경
    borderRadius: 20, // 입력 필드와 버튼을 감싸는 View의 모서리를 둥글게 만듭니다.
    padding: 30, // 내부 여백 추가
    width: '80%',
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  // TouchableOpacity 스타일 추가
  touchableButton: {
    alignItems: 'center',
    backgroundColor: '#2196F3', // 버튼 배경색
    padding: 10,
    borderRadius: 10, // 여기에서 버튼의 borderRadius 설정
  },
  touchableButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  //modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 10,
    padding: 5,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});