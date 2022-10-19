import React, { useState, useEffect } from "react";
import "./style.css";
import Useredit from './components/useredit';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(0);
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


    return (

    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/test" component={Useredit} />
            </Routes>
        </Router>

        <h1>API Posts</h1>

            <ol>

                {data.slice(0, value + 10).map(({ userId, title, body }) => (
                    <li>

                        <p>
                            <b>USER ID:</b> {userId}
                        </p>
                        <p>
                            <b>TITLE:</b> {title}
                        </p>
                        <p>
                            <b>BODY TEXT:</b> {body}
                        </p>
                        <button onClick="User">edit</button>
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
/*function updateUser()
{
    let item={title,body}
    console.warn("item",item)
    fetch(`http://localhost:4000/todo/${userId}`, {
        method: 'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(item)
    }).then((result) => {
        result.json().then((resp) => {
            console.warn(resp)
            getUsers()
        })
    })
}*/
