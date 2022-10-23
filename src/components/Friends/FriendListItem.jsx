import css from '../Friends/Friends.module.css'

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return <li className={css.item} kay={id} >
             <img className="avatar" src={avatar} alt={name} width="48" />
        <p className={`${isOnline?css.online:css.ofline}`}>{name}</p>
    </li> }