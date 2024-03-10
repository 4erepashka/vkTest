import React from "react";
import styles from '../styles/group.module.css';

export default function Friends(props){
    let dataFriends =  props.dataFriends;
    return(
        <div className={styles.friendsDescr}>
           {
            dataFriends.map(obj=>{
                return(
                    <div className={styles.friendsDescrElement}>
                        <div className={styles.friendsDescrItem}>{obj['first_name']}</div>
                        <div className={styles.friendsDescrItem}>{obj['last_name']}</div>
                    </div>
                )
                })
           } 
        </div>
        
    )

}