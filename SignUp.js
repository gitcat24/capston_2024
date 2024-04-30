import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Modal, Pressable, TouchableOpacity, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [department, setDepartment] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errorField, setErrorField] = useState('');
  const [inputError, setInputError] = useState('false');

  const handleRegister = () => {
    if (!userId) {
      setErrorField('아이디');
      setTimeout(() => setErrorField(''), 2000);
      
      return;
    } else if (!password) {
      setErrorField('비밀번호');
      setTimeout(() => setErrorField(''), 2000);
      
      return;
    } else if (!department) {
      setErrorField('소속학과');
      setTimeout(() => setErrorField(''), 2000);
      
      return;
    } else if (!phoneNumber) {
      setErrorField('전화번호');
      setTimeout(() => setErrorField(''), 2000);
      
      return;
    }
    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (password !== confirmPassword) {
      setPasswordError(true);
      // 2초 후에 경고 메시지 숨김
      setTimeout(() => {
        setPasswordError(false);
      }, 2000);
      return;
    }
    // 회원가입 로직 처리
    console.log('회원가입 로직 처리');
    setModalVisible(true);
  };

  return (
    <View style={styles.container }>
      <Text style={styles.title}>회원가입</Text>
      <View style={styles.inputContainer}>
      <Text style={styles.text}>아이디<Text style={{color: 'red'}}> [필수]</Text></Text>
      <TextInput
        style={[styles.input, styles.roundedInput]}
        placeholder="아이디를 입력하세요"
        onChangeText={setUserId}
        value={userId}
      />
      {/* 아이디 중복확인 버튼 */}
      <Text style={styles.text}>비밀번호<Text style={{color: 'red'}}> [필수]</Text></Text>
      <TextInput
        style={[styles.input, styles.roundedInput]}
        placeholder="비밀번호를 입력하세요"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      {passwordError && (
          <Text style={{color: 'red', paddingLeft: 15}}>비밀번호가 일치하지 않습니다.</Text>
        )}
      {/*passwordError는 상태(state)로 관리되는 boolean 값입니다. 이 값이 true일 때만 && 연산자 뒤의 컴포넌트(<Text style={{color: 'red', paddingLeft: 15}}>비밀번호가 일치하지 않습니다.</Text>)가 렌더링*/}
      <TextInput
        style={[styles.input, styles.roundedInput]}
        placeholder="비밀번호를 다시 입력하세요"
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Text style={styles.text}>소속학과<Text style={{color: 'red'}}> [필수]</Text></Text>
      <TextInput
        style={[styles.input, styles.roundedInput]}
        placeholder="소속학과를 입력하세요"
        onChangeText={setDepartment}
        value={department}
      />
      <Text style={styles.text}>전화번호<Text style={{color: 'red'}}> [필수]</Text></Text>
      <TextInput
        style={[styles.input, styles.roundedInput]}
        placeholder="전화번호를 입력하세요"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={[styles.input, styles.roundedInput]}
        placeholder="Email를 입력하세요"
        onChangeText={setEmail}
        value={email}
      />
      {errorField !== '' && (
          <Text style={{ color: 'red', paddingLeft: 15 }}>{errorField}는 필수 입력칸입니다.</Text>
        )}
      {/*회원가입 버튼은 또한 필수칸을 채웠을시 누르는게 가능하게함 필수칸을 안채웠으면 버튼위에 '~는 필수 입력칸입니다.'라고 하나가 2초동안 뜸 만약 여러개의 필수 입력칸을 안채웠을시 아이디>비밀번호>소속학과>전화번호 로 우선순위 되어서 하나만 뜸*/}
      <View style={{ marginTop: 10, width: '80%', alignSelf: 'center'}}>
      <TouchableOpacity
            style={styles.touchableButton}
            onPress={handleRegister}
            disabled={passwordError } // 필수 입력 필드가 비어있거나(작성 해야함) 비밀번호 오류가 있는 경우 버튼 비활성화
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
