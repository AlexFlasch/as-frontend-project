import React from 'react';
import PropTypes from 'prop-types';

import { StyledUserCard } from './styles';

const UserCard = props => {
  return (
    <StyledUserCard>
      <img
        className="user-photo"
        src={props.user.photo}
        alt={props.user.name}
      />
      <span className="user-name">{props.user.name}</span>
      <span className="age-label">Age:</span>
      <span className="user-age">{props.user.age}</span>
      <span className="bio-label">Bio:</span>
      <span className="user-bio">{props.user.bio}</span>
      <span className="phone-label">Phone:</span>
      <span className="user-phone">{props.user.number}</span>
    </StyledUserCard>
  );
};

UserCard.defaultProps = {
  user: {},
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
