import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { TouchableOpacity, Text, View } from 'react-native';

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: '안녕하세요! 무엇을 도와드릴까요?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: '채팅봇',
          avatar: require('./assets/syu.jpg'), // 로컬 이미지 참조
        },
      },
    ])
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    // 여기에 메시지를 처리하는 로직을 추가할 수 있습니다.
  }, []);

  // 커스텀 보내기 버튼 렌더링
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={{ marginRight: 10, marginBottom: 5 }}>
          <TouchableOpacity style={{ backgroundColor: "#007aff", borderRadius: 5, padding: 6 }}>
            <Text style={{ color: '#fff', fontSize: 16 }}>보내기</Text>
          </TouchableOpacity>
        </View>
      </Send>
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderSend={renderSend} // 커스텀 보내기 버튼 사용
    />
  );
}
