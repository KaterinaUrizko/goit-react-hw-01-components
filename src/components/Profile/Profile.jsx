import PropTypes from 'prop-types';
import { Container, ProfileInfo, Image, InfoName, InfoTag, InfoLocation, Stats, StatsQuantity,
   StatsLabel, StatsItem  } from './Profile.styled';



export const Profile = ({username, tag,location, avatar, followers, views, likes}) => {
    return <Container>
    <ProfileInfo>
      <Image
        src={avatar}
        alt="User avatar"
      
      />
      <InfoName>{username}</InfoName>
      <InfoTag>@{tag}</InfoTag>
      <InfoLocation>{location}</InfoLocation>
    </ProfileInfo>
  
    <Stats>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{likes}</StatsQuantity>
      </StatsItem>
    </Stats>
  </Container>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes:PropTypes.number.isRequired,
};