import React from 'react';
import Group from './Group'
import styles from '../styles/groups.module.css'
export default function Groups(props){
    const data = props.data;
    return(
        <div className={styles.groups}>
            {data.map((obj) => (
            <Group key={obj.id} {...obj} />
          ))}
        </div>
        
    )
}