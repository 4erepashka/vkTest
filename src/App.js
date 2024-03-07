import React, { useState } from 'react';

export default function App(){
    const [groups, setGroups] = useState([]);
    function handlerGroup(){
        fetch('https://github.com/3all/vkTest/blob/master/groups.json')
        .then((response) => {
            JSON.stringify(response);
            console.log(response);
        })
        .then((data => console.log(data)))
    }
    return(
        <>
            <h3>Hello world</h3>
            <button onClick={handlerGroup}>Поиск групп</button>
        </>
        
    );
}