import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import posed, { PoseGroup } from 'react-pose';

import { getUsers } from '../../store/selectors';

import { StyledUserList } from './styles';

import UserCard from '../UserCard';

const PosedUserList = posed.ul({
  enter: {
    delay: 500,
    delayChildren: 100,
    staggerChildren: 100,
  },
  exit: {
    delayChildren: 100,
    staggerChildren: 100,
  },
});

const UserItem = posed.li({
  preEnter: {
    opacity: 0,
    y: -15,
    easing: 'easeInOut',
  },
  enter: {
    opacity: 1,
    y: 0,
    easing: 'easeInOut',
  },
  exit: {
    opacity: 0,
    y: -15,
    easing: 'easeInOut',
  },
});

const UserList = props => {
  const users = useSelector(getUsers);

  return users.length ? (
    <StyledUserList>
      <PoseGroup enterPose="enter" exitPose="exit" animateOnMount={true}>
        {props.visible && (
          <PosedUserList
            key="user-list"
            pose={props.visible ? 'visible' : 'hidden'}
          >
            {users.map(user => (
              <UserItem key={user.id} preEnterPose="preEnter" enterPose="enter">
                <UserCard user={user} />
              </UserItem>
            ))}
          </PosedUserList>
        )}
      </PoseGroup>
    </StyledUserList>
  ) : null;
};

UserList.defaultProps = {
  visible: false,
};

UserList.propTypes = {
  visible: PropTypes.bool,
};

export default UserList;
