import React, { useState } from 'react';

export default function App(){
    const [groups, setGroups] = useState([]);
    function handlerGroup(){
        fetch('./groups.json')
        .then((response) => {
            if (response.status !== 200) {  
                console.log('Looks like there was a problem. Status Code: ' +  
                  response.status);  
                return;  
              }
            response.json().then(function(data) {  
                console.log(data);  
              });  
        });
    }
    return(
        <>
            <h3>Hello world</h3>
            <button onClick={handlerGroup}>Поиск групп</button>
        </>
        
    );
}