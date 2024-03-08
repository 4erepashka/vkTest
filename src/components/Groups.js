import React from 'react';
import Group from './Group'

export default function Groups(props){
    const data = props.data;
    console.log('in groups', data);
    return(
        <Group data= {data} />
    )
}