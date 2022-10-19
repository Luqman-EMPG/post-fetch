// import React, {useState,useEffect} from "react";
// import "./style.css"
//
// // fetch all data and display
// export default function App() {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//
//         const getData = async () => {
//             try {
//                 const response = await fetch(
//                     `https://jsonplaceholder.typicode.com/posts`
//                 );
//                 if (!response.ok) {
//                     throw new Error(
//                         `This is an HTTP error: The status is ${response.status}`
//                     );
//                 }
//                 let actualData = await response.json();
//                 setData(actualData);
//                 setError(null);
//             }
//             catch(err) {
//                 setError(err.message);
//                 setData(null);
//             }
//         }
//         getData()
//     }, [])
//
//     return (
//
//         <div className="App">
//
//             <h1>API Posts</h1>
//
//             {error && (
//                 <div>{`There is a problem fetching the post data - ${error}`}</div>
//             )}
//             <ol>
//                 {data &&
//                     data.map(({ id, title,body }) => (
//                         <li key={id}>
//                             <p><b>USER ID:</b> {id}</p>
//                             <p><b>TITLE:</b> {title}</p>
//                             <p><b>BODY TEXT:</b> {body}</p>
//                         </li>
//                     ))}
//             </ol>
//
//         </div>
//     );
// }