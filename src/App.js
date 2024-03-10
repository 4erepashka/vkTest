import React, { useState, useEffect } from 'react';
import Groups from './components/Groups';
import Filter from './layout/Filter';
import styles from './styles/main.module.css';
import './styles/App.css'

export default function App(){
    let [dataGroups, setData] = useState([])
    let [isPrivate, setPrivate] = useState('all');
    let [avatarColor, setAvatarColor,] = useState('all');
    let [friends, setFriends] = useState(undefined);

    function filter(isPrivate, avatarColor, friends){
        if (isPrivate === 'true'){
            isPrivate = true
        }else if  (isPrivate === 'false'){
            isPrivate = false;
        }
        
        if (friends === 'true'){
            friends = true
        }else{

            friends = undefined;
        }
        setPrivate(isPrivate);
        setAvatarColor(avatarColor);
        setFriends(friends);
    }

    function handlerGroup(){
        let new_data = [];
        let isFriend;
        setTimeout(sendData, 1000);
        function sendData(){
            fetch('https://4erepashka.github.io/vkTest/groups.json')
            .then((response) => {
                if (response.status !== 200) {  
                    return 'smth wrong';  
                }
                if (response.data && response.data.result && response.data.result === 0 && !response.data.data  ){
                    throw new Error('Smth upalo (');
                }
                response.json().then(function(data) {  
                    data.map(object =>{
                        if (object['friends'] !== undefined){
                            isFriend = true;
                        }else{
                            isFriend = undefined
                        }
                        if (isPrivate === 'all' && avatarColor==='all' && friends=== undefined){
                            new_data = data.filter(obj=>obj['friends'] === undefined);
                        }else if ( (object['avatar_color'] === avatarColor || avatarColor === 'all') &&
                        (object['closed'] == isPrivate || isPrivate === 'all')&&
                         isFriend === friends){
                           new_data.push(object);
                       }
                    });
                    setData(new_data);
                  })
                .catch((err)=>{
                    console.error(err)
                    alert('Wrong');
                })
            });

        }
       
    }

    useEffect(handlerGroup, [isPrivate, avatarColor, friends]);
    return(
        <div className={styles.app}>
          
            <Filter handlerFilter={filter}/>

            <Groups data={dataGroups}/>
        </div>
        
    );
}