import React from "react";
import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const color = isOnline ? "green" : "red";
  return (
    <div className={css.div}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={css.status} style={{ color }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export const FriendList = ({ friends }) => {
  return (
    <div className={css.friendList_div}>
      {friends.map((item, index) => {
        return (
          <ul key={index} className={css.friendList_ul}>
            <li className={css.friendList_li}>
              <FriendListItem
                classNamea={css.friendList_li_item}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
              />
            </li>
          </ul>
        );
      })}
    </div>
  );
};
