//FETCHES ALL DATA FROM API


import { useState, useEffect,  } from "react";
import "./style.css";
import {Link} from "react-router-dom";


export default function App() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts`
                );
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

            <h1>API Posts</h1>

            <ol>

                {data.slice(0, value + 10).map((data) => (
                    <li key={data.id} className="data">
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
