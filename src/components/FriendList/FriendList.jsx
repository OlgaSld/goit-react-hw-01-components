import { FriendListItem } from "../FriendListItem/FriendListItem"
import { List } from "./FriendList_styled";

export const FriendList = ({ friends }) => {
    return (
      <List>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friends={friend} />
            ))}
      </List>
    );
};


