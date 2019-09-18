import React from 'react';
import PropTypes from 'prop-types';

const UserCard = props => <div>{props.user.id}</div>;

UserCard.defaultProps = {
  user: {},
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
