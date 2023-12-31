import PropTypes from 'prop-types';

import {
  Wrapper,
  Description,
  Avatar,
  Username,
  NickName,
  Location,
  StatsData,
  ListItem,
  Label,
  StatsQty,
} from './Profile_styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Wrapper>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Username>{username}</Username>
        <NickName>{tag}</NickName>
        <Location>{location}</Location>
      </Description>

      <StatsData>
        <ListItem>
          <Label>Followers</Label>
          <StatsQty>{followers}</StatsQty>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <StatsQty>{views}</StatsQty>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <StatsQty>{likes}</StatsQty>
        </ListItem>
      </StatsData>
    </Wrapper>
  );
};


Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};