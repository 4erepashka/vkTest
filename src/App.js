import React, { useState } from 'react';

export default function App(){
    const [groups, setGroups] = useState([]);
    function handlerGroup(){
        fetch('./groups.json')
        .then((response) => {
            console.log(response.body);
        });
    }
    return(
        <>
            <h3>Hello world</h3>
            <button onClick={handlerGroup}>Поиск групп</button>
        </>
        
    );
}