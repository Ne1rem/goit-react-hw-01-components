import React from "react";
import {
    FriendItem,
    FriendList,
    Name,
    Offline,
    Online,
    Status, } from "./friends.style"

export const Friends = ({ friends }) => {
  return (
    <FriendList>
      {friends.map((friend) => (
        <FriendItem class="item" id={friend.id}>
          <Status class="status">{friend.isOnline ? <Online /> : <Offline />}</Status>
          <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
          <Name class="name">{friend.name}</Name>
        </FriendItem>
      ))}
    </FriendList>
  );
};
