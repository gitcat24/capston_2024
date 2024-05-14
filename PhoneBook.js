import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
    // 부서 목록 데이터
    const departments = [
        { id: '1', name: '학과', phone: '02-3399-0000', detail: '' },
        { id: '2', name: '학생처', phone: '02-3399-3228', detail: '학생 지원 서비스(근로, 장학 등)' },
        { id: '3', name: '교목처', phone: '02-3399-3332', detail: '학생 선교 및 대강당 유지보수' },
        { id: '4', name: '교무처', phone: '02-3399-3359,3153', detail: '학사 지원 서비스 및 상담' },
        { id: '5', name: '사무처', phone: '02-3399-3450', detail: '캠퍼스 환경 관리 및 조경' },
        { id: '6', name: '기획처', phone: '02-3399-3395', detail: '교내 예산 및 대외 평가 관리' },
        { id: '7', name: '입학처', phone: '02-3399-3377~79', detail: '입학 관련 정책 및 제도' },
        { id: '8', name: '재무처', phone: '02-3399-3441~9', detail: '수입.지출, 등록금' },
        { id: '9', name: '연구산학처', phone: '02-3399-3901,3903,3928', detail: '학술활동 지원 및 연구비 관리' },
        { id: '10', name: '산학협력단', phone: '02-3399-3901', detail: '대학-기업 간 교류' },
        { id: '11', name: '대외국제처', phone: '02-3399-3801', detail: '국제학생 지원 및 국제교류업무' },
        { id: '12', name: '직속기구', phone: '02-3399-0000', detail: '교육혁신 및 일자리본부' },

    ];

    // 선택된 부서의 상세 정보를 저장하는 상태
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    // 부서 선택 핸들러
    const handleSelectDepartment = (department) => {
        setSelectedDepartment(department);
    };

    return (
        <View style={styles.container}>
            {selectedDepartment ? (
                // 선택된 부서의 상세 정보 표시
                <View style={styles.detailContainer}>
                    <Text style={styles.detailTitle}>{selectedDepartment.name}</Text>
                    <Text>담당업무: {selectedDepartment.detail}</Text>
                    <Text>전화번호: {selectedDepartment.phone}</Text>
                    <TouchableOpacity onPress={() => setSelectedDepartment(null)} style={styles.backButton}>
                        <Text>뒤로가기</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                // 부서 목록 표시
                <FlatList
                    data={departments}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <TouchableOpacity 
                        style={{width: 120, backgroundColor: '#87ceeb', borderRadius: 10, borderWidth: 1, borderColor: '#fff'}}
                        onPress={() => handleSelectDepartment(item)}
                      >
                        <Text style={[styles.title, {color: '#fff'}]}>{item.name}</Text>
                      </TouchableOpacity>  
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
    },
    detailContainer: {
        padding: 20,
    },
    detailTitle: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    backButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#ddd',
    },
});
