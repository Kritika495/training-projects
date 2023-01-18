import React from 'react';
import {useParams} from 'react-router-dom';
const ContactDetailsHooks = ()=>{
    const {id} = useParams();

    return(
        <div>
           <h3> Detalils of contact id: {id}</h3>
        </div>
    )
}

export default ContactDetailsHooks;