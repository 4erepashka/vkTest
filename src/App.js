import React, { useState, useEffect } from 'react';
import Groups from './components/Groups';

export default function App(){
    let [dataGroups, setData] = useState([])
    function handlerGroup(){
        fetch('./groups.json')
        .then((response) => {
            if (response.status !== 200) {  
                console.log('Looks like there was a problem. Status Code: ' +  
                  response.status);  
                return;  
              }
            response.json().then(function(data) {  
                setData(data);
              });  
        });
    }

    useEffect(handlerGroup, []);
    return(
        <>
            <h3>Hello world</h3>
            <button onClick={handlerGroup}>Поиск групп</button>
            <Groups data={dataGroups}/>
        </>
        
    );
}