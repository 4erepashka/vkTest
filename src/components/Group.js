import React from "react";
import styles from '../styles/group.module.css'

export default function Group(props){
    let avatar_color = 'red';
    let card_name = 'Котики';
    let members_count = 457;
    let card_friends = [
        {
          "first_name": "Маша",
          "last_name": "Петрова"
        },
        {
          "first_name": "Фёдор",
          "last_name": "Агапов"
        },
        {
          "first_name": "Вера",
          "last_name": "Петрова"
        }
      ];
      let card_private = false;
      console.log(props);
    return(
        <div className={styles.cardWrapper}>
            <div className={styles.avatar} style={{backgroundColor: `${avatar_color}`}}></div>
            <div className={styles.name}>{card_name}</div>
            <div className={styles.members}>{`${members_count} подписчиков`}</div>
            <div className={styles.friends}>{`${card_friends.length} друзей`}</div>
            <div className={styles.private}>{(card_private)?'закрытая':'открытая'}</div>

        </div>
    )
}