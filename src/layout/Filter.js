import React from 'react';
import styles from '../styles/filter.module.css';

export default function Filter(props){
    let handler = props.handlerFilter;
    function selectHandler(){
      let privateType = document.getElementsByName('privateSelect');
      let avatarColor= document.getElementsByName('avatartColor');
      let selectFriends = document.getElementsByName('selectFriends');
      let privateTypeValue = privateType[0].options[privateType[0].selectedIndex].value;
      let avatarColorValue = avatarColor[0].options[avatarColor[0].selectedIndex].value;
      let selectFriendsValue = selectFriends[0].options[selectFriends[0].selectedIndex].value;
  
      handler(privateTypeValue, avatarColorValue, selectFriendsValue);


    }
    return(
        <div className={styles.filterWrapper}>
            <div className={styles.selectTitle_01}>Тип приватности</div>
             <div className={styles.select_01}>
                <select name="privateSelect" onChange={selectHandler}>
                  <option value="all">Все</option>
                  <option value="true">Закрытая</option>
                  <option value="false">Открытая</option>
                </select>
            </div>
            <div className={styles.selectTitle_02}>Цвет аватарки</div>
             <div className={styles.select_02}>
                <select  name="avatartColor" onChange={selectHandler}>
                  <option value="all">Все</option>
                  <option value="red">red</option>
                  <option value="green">green</option>
                  <option value="yellow">yellow</option>
                  <option value="blue">blue</option>
                  <option value="purple">purple</option>
                  <option value="white">white</option>
                  <option value="orange">orange</option>
                </select>
            </div>
            <div className={styles.selectTitle_03}>Налииче друзей</div>
             <div className={styles.select_03}>
                <select name="selectFriends" onChange={selectHandler}>
                  <option value='false'>Нет</option>
                  <option value="true">да</option>
                </select>
            </div>
        </div>
    )
}