import PropTypes from 'prop-types';
import { FriendItem, Status, Image, Name, List } from './Friendlist.styled';

export const FriendList = ({friends}) =>{
    return(

    <List>
    {friends.map(({id, avatar, name, isOnline})=>(
        <FriendItem key={id}>
            <Status isOnline = {isOnline}></Status>
            <Image src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendItem>
    ))

    }
    </List>
 )}

 FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };


