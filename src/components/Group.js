import React, {useEffect, useState} from "react";
import styles from '../styles/group.module.css'
import Friends from "./Friends";

export default function Group(props){
    let data = props.data;
    let avatar_color =  props['avatar_color'];
    let card_name = props.name;
    let members_count = props['members_count'];
    const [isShowDescription, setShowDescription] = useState(false);
    let card_private = props.closed;


    function friendsHandler(event){
        setShowDescription(!isShowDescription); 
    }

    useEffect(()=>{
    }, [isShowDescription])

    return(
        <div className={styles.cardWrapper}>
            {avatar_color?(<div className={styles.avatar} style={{backgroundColor: `${avatar_color}`}}></div>):null}
            <div className={styles.name}>{card_name}</div>
            <div className={styles.members}>{`${members_count} подписчиков`}</div>
            {props['friends']?(<div onClick={friendsHandler} className={styles.friends}>{`${props['friends'].length} друзей`}</div>):null}
            <div className={styles.private}>{(card_private)?'закрытая':'открытая'}</div>
            {isShowDescription?(<Friends dataFriends ={props.friends}></Friends>):null}
        </div>
    )
}