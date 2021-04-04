import React from 'react';
import Friend from './Friend/Friend';
import styles from './FriendsList.module.css'

const FriendsList = ({ friends }) => {
  return (
    <>
      <ul className = {styles.friendList} >
        {friends.map(friend => (
          <li className = {styles.item} key={friend.id}>
            <Friend avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendsList;
