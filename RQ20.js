import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [allNotices, setAllNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [searchFilter, setSearchFilter] = useState('title');
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    fetchNotices();
  }, [currentPage]);

  const fetchNotices = async () => {
    try {
      const response = await axios.get(`http://your-server-ip:3000/notices?page=${currentPage}`);
      setNotices(response.data.notices);
      setAllNotices(response.data.notices);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  const handleSearch = () => {
    const filteredNotices = allNotices.filter((notice) => {
      if (searchFilter === '제목') {
        return notice.title.includes(searchText);
      } else if (searchFilter === '내용') {
        return notice.content.includes(searchText);
      } else {
        return notice.title.includes(searchText) || notice.content.includes(searchText);
      }
    });
    setNotices(filteredNotices);
    setCurrentPage(1); // 검색 시 1페이지로 초기화
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setNotices(allNotices.slice((page - 1) * 10, page * 10));
  };

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
  };

  const handleBackToList = () => {
    setSelectedNotice(null);
  };

  // 테스트를 위한 데이터들
  useEffect(() => {
    if (!allNotices.length) {
      const testNotices = [];
      for (let i = 1; i <= 25; i++) {
        testNotices.push({
          id: i,
          title: `테스트공지사항${i.toString().padStart(3, '0')}`,
          content: `5월 ${i}일`
        });
      }
      setAllNotices(testNotices);
      setNotices(testNotices.slice(0, 10));
    }
  }, [allNotices]);

  return (
    <View>
      {selectedNotice ? (
        <View style={styles.noticeDetailContainer}>
          <Text style={styles.noticeDetailTitle}>{selectedNotice.title}</Text>
          <Text style={[styles.noticeDetailContent, { borderWidth: 1, borderColor: '#ccc', padding: 10 }]}>{selectedNotice.content}</Text>
          <Button title="목록으로 돌아가기" onPress={handleBackToList} />
        </View>
      ) : (
        <View style={styles.noticeListContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="검색"
              value={searchText}
              onChangeText={setSearchText}
              style={styles.searchInput}
            />
            <Picker
              selectedValue={searchFilter}
              onValueChange={setSearchFilter}
              style={styles.searchFilter}
            >
              <Picker.Item label="제목" value="제목" />
              <Picker.Item label="내용" value="내용" />
              <Picker.Item label="제목+내용" value="both" />
            </Picker>
            <Button title="검색" onPress={handleSearch} />
          </View>
          <FlatList
            data={notices}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.noticeItem}>
                <Button title={item.title} onPress={() => handleNoticeClick(item)} style={styles.noticeTitle} />
              </View>
            )}
            ListEmptyComponent={
              <Text>해당하는 게시물이 없습니다.</Text>
            }
          />
          <View style={styles.pageButtonContainer}>
            {Array.from({ length: Math.ceil(allNotices.length / 10) }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                title={page.toString()}
                onPress={() => handlePageChange(page)}
                color={page === currentPage ? 'blue' : 'gray'}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  noticeListContainer: {
    padding: 20
  },
  noticeItem: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10
  },
  noticeTitle: {
    color: 'black',
    fontWeight: 'bold'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  searchInput: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginRight: 10
  },
  searchFilter: {
    marginRight: 10
  },
  pageButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  noticeDetailContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20
  },
  noticeDetailTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10
  },
  noticeDetailContent: {
    fontSize: 18,
    lineHeight: 1.5
  }
});

export default NoticeBoard;
