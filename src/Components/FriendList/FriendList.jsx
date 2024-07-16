import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    const noOnline = {
        backgroundColor: "red",
        color: "red"
    };
    const online = {
        backgroundColor: "green",
        color: "green"
    };
    return (
        friends.map(friend => {
            return (
                <li className={css.item} key={friend.id}>
                    <span >{friend.isOnline === true ?
                        <span className={css.status} style={online}>......</span> :
                        <span className={css.status} style={noOnline}>......</span>}
                    </span>
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>
                </li>
            );
        })

    );
};

export default FriendList;