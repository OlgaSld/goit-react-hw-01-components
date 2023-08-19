import PropTypes from 'prop-types';
import {
  Avatar,
  ListItem,
  Status,
  UserName,
} from './FriendListItem_styled';


export const FriendListItem = ({ friends: { name, avatar, isOnline } }) => {
    return (
      <ListItem>
            <Status status={isOnline}>{isOnline}</Status>
        <Avatar src={avatar} alt={name} width="48" />
        <UserName>{name}</UserName>
      </ListItem>
    );
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired
}.isRequired;
