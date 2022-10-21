import {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import React from "react";

export default function Useredit(){

    //const {id}=useParams();

    // const[Title,setTitle]=useState(title);
    // const[Body,setBody]=useState(body);
     const [data, setData] = useState([]);
    // useEffect(({id}) => {
    //     const getData = async () => {
    //             const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //                 .then((response) => response.json())
    //                 .then((json) => console.log(json));
    //     };
    //     getData();
    // }, []);
    useEffect((id) => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts${id}`
                );
                let actualData = await response.json();
                setData(actualData);
            } catch (err) {
                setData(null);
            }
        };
        getData();
    },[]);
    return(
        <div className="App">
            {data.map(({id}) => (
                <li key={data.id}>
                    <p>
                        <b>USER ID:</b> {data.userId}
                    </p>
                    <p>
                        <b>TITLE:</b> {data.title}
                    </p>
                    <p>
                        <b>BODY TEXT:</b> {data.body}
                    </p>
                    <Link to={`/user/${data.id}`}>
                        <button>
                            EDIT
                        </button>
                    </Link>
                    {/*onClick={()=>navigate("/user"+id,{state:{id:userId,name:title,body:body}})}*/}
                </li>
            ))}
        </div>
        // <div>
        //     <p className="useredit">
        //         <b>USER ID:</b> {userId}
        //         <br/>
        //         <b>TITLE:</b> {title}
        //         <br/>
        //         <b>BODY TEXT:</b> {body}
        //         <br/>
        //     </p>
        //
        //     <h2>UPDATE THE DATA</h2>
        //
        //     <label>TITLE</label>
        //     <input onChange={(e)=> setTitle(e.target.value)}/>
        //     <br/>
        //     <br/>
        //     <label>BODY</label>
        //     <input onChange={(e)=> setBody(e.target.value)} />
        //     <br/>
        //     <br/>
        //     {/*<button onClick={Handlechange}>UPDATE</button>*/}
        //
        // </div>

    )

}

