import { FriendListItem } from "./FriendListItem"
import PropTypes from 'prop-types'
import css from './Friends.module.css'

export const FriendsList = ({ friends }) => {
    return <ul className={css.friendList}>
        {friends.map(({ avatar, name, id, isOnline }) => {
            return <FriendListItem
            key={id}
                avatar={avatar}
                name={name}
                id={id}
                isOnline={isOnline} />
        })}

    </ul>
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired
}