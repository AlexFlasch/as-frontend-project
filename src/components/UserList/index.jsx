import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import posed, { PoseGroup } from 'react-pose';

import { getUsers } from '../../store/selectors';

import { StyledUserList } from './styles';

import UserCard from '../UserCard';

const UserPoseGroup = posed.ul({
  hidden: {
    staggerChildren: 333,
  },
  visible: {
    staggerChildren: 333,
  },
});

const UserItem = posed.li({
  hidden: {
    opacity: 0,
    y: 15,
    damping: 15,
  },
  viisble: {
    opacity: 1,
    y: 0,
    damping: 15,
  },
});

const UserList = props => {
  const users = useSelector(getUsers);

  return (
    <StyledUserList>
      <UserPoseGroup pose={props.visible ? 'visible' : 'hidden'}>
        {users.map(user => (
          <UserItem key={user.id}>
            <UserCard user={user} />
          </UserItem>
        ))}
      </UserPoseGroup>
    </StyledUserList>
  );
};

UserList.defaultProps = {
  visible: false,
};

UserList.propTypes = {
  visible: PropTypes.bool,
};

export default UserList;
