import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Switch, Linking, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
    const [id, setId] = useState(''); // 아이디 상태 관리
    const [password, setPassword] = useState(''); // 비밀번호 상태 관리
    const [isAutoLoginEnabled, setIsAutoLoginEnabled] = useState(false); // 자동 로그인 활성화 상태
    const [passwordVisibility, setPasswordVisibility] = useState(true); // 비밀번호 가시성 상태
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

    const validateLogin = () => {
        return (id === 'syu36' && password === '1q2w3e4r!') || (id === 'test1id' && password === 'test1pw');
    }; // 로그인 유효성 검사

    const handleLogin = () => {
        if (validateLogin()) {
            setIsLoggedIn(true); // 로그인 상태를 true로 변경
            Platform.OS === 'web' ? alert('환영합니다') : Alert.alert('환영합니다');
        } else {
            Platform.OS === 'web' ? alert('로그인에 실패하였습니다') : Alert.alert('로그인에 실패하였습니다');
        }
    }; // 로그인 처리 함수

    const handleLogout = () => {
        setIsLoggedIn(false); // 로그인 상태를 false로 변경
        setId(''); // 아이디 상태 초기화
        setPassword(''); // 비밀번호 상태 초기화
        Alert.alert('로그아웃 되었습니다. 감사합니다.'); // 로그아웃 알림
    }; // 로그아웃 처리 함수

    const handleIdFind = () => {
        Alert.alert('아이디 찾기 결과', '귀하의 아이디는 syu36 또는 test1id 입니다.');
    }; // 아이디 찾기 처리 함수

    const handlePasswordFind = () => {
        Alert.alert('비밀번호 재설정', '인증에 성공하였습니다. 비밀번호를 재설정하세요.');
    }; // 비밀번호 찾기 처리 함수

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleBox} onPress={() => Linking.openURL('https://www.syu.ac.kr/')}>
                <Text style={styles.titleText}>CHAT SYU</Text>
            </TouchableOpacity>
            {!isLoggedIn ? ( // 로그인 상태가 아니라면 로그인 폼 표시
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="아이디"
                        value={id}
                        onChangeText={setId}
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
                            placeholder="비밀번호"
                            value={password}
                            secureTextEntry={passwordVisibility}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisibility(!passwordVisibility)}>
                            <Feather name={passwordVisibility ? 'eye-off' : 'eye'} size={20} color="grey" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.autoLoginRow}>
                        <Text>자동 로그인</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isAutoLoginEnabled ? "lightgreen" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={setIsAutoLoginEnabled}
                            value={isAutoLoginEnabled}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>로그인</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.findButton} onPress={handleIdFind}>
                    <Text style={styles.findButtonText}>ID 찾기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.findButton} onPress={handlePasswordFind}>
                        <Text style={styles.findButtonText}>비밀번호 찾기</Text>
                    </TouchableOpacity>
                </>
            ) : ( // if logged in, show logout button
                <>
                    <Text style={styles.welcomeText}>환영합니다!</Text>
                    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                        <Text style={styles.logoutButtonText}>로그아웃</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleBox: {
        marginBottom: 20,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12,
        borderWidth: 1,
        width: '80%',
    },
    autoLoginRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
    },
    findButton: {
        marginTop: 10,
        padding: 10,
        width: '80%',
        alignItems: 'center',
    },
    findButtonText: {
        color: 'blue',
    },
    welcomeText: {
        fontSize: 20,
        marginBottom: 20,
    },
    logoutButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    logoutButtonText: {
        color: 'white',
    },
});
