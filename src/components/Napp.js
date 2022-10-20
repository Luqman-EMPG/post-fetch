import React, { useState, useEffect,  } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";


export default function App() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(0);
   const navigate = useNavigate();


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
            } catch (err) {
                setData(null);
            }
        };
        getData();
    }, []);


    //let state;
    return (

        <div className="App">

            <h1>API Posts</h1>

            <ol>

                {data.slice(0, value + 10).map(({ id,userId, title, body }) => (
                    <li key={id}>
                        <p>
                            <b>USER ID:</b> {userId}
                        </p>
                        <p>
                            <b>TITLE:</b> {title}
                        </p>
                        <p>
                            <b>BODY TEXT:</b> {body}
                        </p>
                        <Link to={"/user/"+id}>
                            <button onClick={() => navigate("/user/:id",{state:{id:userId,name:title,body:body}})}>
                                EDIT
                            </button>
                        </Link>
                    </li>
                ))}
            </ol>
            <button
                onClick={() => {
                    if (value - 10 < 0) {
                        setValue(0);
                    } else {
                        setValue(value - 10);
                    }
                }}
            >
                Back
            </button>
            <button
                onClick={() => {
                    if (value + 10 > 100) {
                        setValue(90);
                    } else {
                        setValue(value + 10);
                    }
                }}
            >
                Next
            </button>


        </div>
    );
}
