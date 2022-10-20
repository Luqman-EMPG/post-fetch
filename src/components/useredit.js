import {useState} from 'react';
import {useParams} from "react-router-dom";
import React from "react";

export default function Useredit(){

    const {id,userId,title,body}=useParams();

    const[Title,setTitle]=useState(title);
    const[Body,setBody]=useState(body);

    function Handlechange(){
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                userId: userId,
                title: Title ,
                body: Body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => console.log(response.json()))
            .then((json) => console.log(json));
    }
    return(
        <div className="useredit">
            <p>
                <b>USER ID:</b> {userId}
            </p>
            <p>
                <b>TITLE:</b> {title}
            </p>
            <p>
                <b>BODY TEXT:</b> {body}
            </p>

            <label>TITLE</label>
            <input onChange={(e)=> setTitle(e.target.value)}/>
            <label>BODY</label>
            <input onChange={(e)=> setBody(e.target.value)} />
            <button onClick={Handlechange}>UPDATE</button>

        </div>

        // <div className="useredit">
        //     <h3>Items page</h3>
        //     <p>{name}</p>
        // </div>
    )

}

