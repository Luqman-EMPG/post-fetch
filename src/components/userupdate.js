// import {useParams} from "react-router-dom";
// import React, {useState} from "react";
//
//
// export default function Userupdate() {
//     const {id} = useParams();
//     const [Title, setTitle] = useState([]);
//     const [Body, setBody] = useState([]);
//     const newresponse = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: id,
//             "title": Title,
//             "body": Body,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((newresponse) => newresponse.json())
//        .then((json) => console.log(json));
//     return (
//         <div>
//             <h2>UPDATE THE DATA</h2>
//
//             <label>TITLE</label>
//             <input onChange={(e) => setTitle(e.target.value)}/>
//             <br/>
//             <br/>
//             <label>BODY</label>
//             <input onChange={(e) => setBody(e.target.value)}/>
//             <br/>
//             <br/>
//
//
//         </div>
//     )
// }