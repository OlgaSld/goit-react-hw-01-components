import { FriendListItem } from "../FriendListItem/FriendListItem"
import { List } from "./FriendList_styled";
import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {
    return (
      <List>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friends={friend} />
            ))}
      </List>
    );
}


FriendList.propTypes = {
  friend: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
  })
}