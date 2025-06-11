import React from 'react'
import css from "./Profile.module.css"
const Profile = ({name, tag, location, image, stats}) => {
  return (
<div className={css.profile}>
  <div className={css.profile_info}>
    <img className={css.image}
      src={image}
      alt="User avatar"
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.profile_stats}>
    <li className={css.profile_stats_items}>
      <span className={css.profile_stats_item_info}>Followers</span>
      <span className={css.profile_stats_item_quantity}>{stats.followers}</span>
    </li>
    <li className={css.profile_stats_items}>
      <span className={css.profile_stats_item_info}>Views</span>
      <span className={css.profile_stats_item_quantity}>{stats.views}</span>
    </li>
    <li className={css.profile_stats_items}>
      <span className={css.profile_stats_item_info}>Likes</span>
      <span className={css.profile_stats_item_quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>

  )
}

export default Profile