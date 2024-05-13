import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Button } from 'react-native';

const UserProfileScreen = () => {
     // 모달의 가시성을 제어하기 위한 상태
     const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>나의 정보</Text>
            
            <View style={styles.profileContainer}>
                {/* 프로필 사진 */}
                <View style={styles.profilePicContainer}>
                <Image 
                  style={styles.profilePic}
                  source={{uri: '여기에_프로필_이미지_URL_입력'}}
                />
                </View>
                {/* 아이디 */}
                <Text style={styles.userId}>사용자ID</Text>
           
            {/* 로그아웃 버튼 */}
            <TouchableOpacity style={styles.button}>
                <Text>로그아웃</Text>
            </TouchableOpacity>
            {/* 회원정보수정 | 회원탈퇴 */}
            <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.linkText}>회원정보수정</Text>
            </TouchableOpacity>
                <Text style={styles.linkSeparator}>|</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={styles.linkText}>회원탈퇴</Text>
                </TouchableOpacity>
            </View>
            </View>
             {/* 회원 탈퇴 확인 모달 */}
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
                        <Text style={styles.modalText}>회원을 탈퇴하시겠습니까?</Text>
                        <View style={styles.modalButtonContainer}>
                            <Button 
                                title="예"
                                onPress={() => {
                                    // 회원 탈퇴 로직을 여기에 추가
                                    setModalVisible(!modalVisible);
                                }}
                            />
                            <Button
                                title="아니오"
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    profilePicContainer: {
        marginBottom: 10,
        // 추가적인 스타일링이 필요할 수 있습니다.
      },
      profilePic: {
        backgroundColor: '#fff',
        width: 100,
        height: 100,
        borderRadius: 50, // 이 값은 이미지의 너비와 높이의 절반입니다.
      },
    profileContainer: {
    backgroundColor: '#f0f0f0', // 입력 필드와 버튼을 감싸는 View의 배경색을 연한 회색으로 변경
    borderRadius: 20, // 입력 필드와 버튼을 감싸는 View의 모서리를 둥글게 만듭니다.
    padding: 30, // 내부 여백 추가
    width: '80%',
    alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50, // 동그란 모양으로 만들기 위함
    },
    userId: {
        fontSize: 18,
        marginBottom: 8,
    },
    button: {
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 10, // 버튼의 모서리를 둥글게
        marginBottom: 20,
       
    },
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    linkText: {
        marginHorizontal: 10,
    },
    linkSeparator: {
        color: 'grey',
    },
    // 모달 스타일 정의 추가
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        size: 20,
        textAlign: "center"
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', // 버튼들 사이에 공간을 만들기 위해 변경
        width: '80%', // 버튼들이 모달 내에서 차지하는 너비를 조절
    },    
    
});



export default UserProfileScreen;
