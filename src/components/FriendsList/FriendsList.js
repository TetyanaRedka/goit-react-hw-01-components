import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend/Friend';
import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default FriendsList;
