import React, { useState } from 'react';
import Groups from './components/Groups';

export default function App(){
    let response_data = [];
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
                response_data.push(data);
              });  
        });
    }
    return(
        <>
            <h3>Hello world</h3>
            <button onClick={handlerGroup}>Поиск групп</button>
            <Groups props= {response_data}/>
        </>
        
    );
}