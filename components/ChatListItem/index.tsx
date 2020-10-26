import React from "react";
import { ChatRoom } from "../../types";
import { View, Text } from "../Themed";
import styles from "./style";
import { Image } from "react-native";

export type ChatListItemProps = { chatRoom: ChatRoom };

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const user = chatRoom.users[1];

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
      </View>
      <View style={styles.midContainer}>
        <Text>{user.name}</Text>
        <Text>{chatRoom.lastMessage.content}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text>{chatRoom.lastMessage.createdAt}</Text>
      </View>
    </View>
  );
};

export default ChatListItem;
