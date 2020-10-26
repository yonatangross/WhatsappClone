import React from "react";
import { User } from "../../types";
import styles from "./style";
import { Image, View, Text, TouchableWithoutFeedback } from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = { user: User };

const ContactListItem = (props: ChatListItemProps) => {
  const { user } = props;

  const navigation = useNavigation();

  const onClick = () => {
    // navigate to chat room with this user
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOfLines={2} style={styles.status}>
              {user.status}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
