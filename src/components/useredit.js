import { useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

export default function Useredit({match}) {
    const {id}=useParams()
    const[newdata,setnewData]=useState([])
    useEffect(()=>{
        fetchData();
    });

    const fetchData = async () => {
        try {
            const newresponse = await fetch(
                (`https://jsonplaceholder.typicode.com/posts/?id=${id}`)
            );
            let actualnewData = await newresponse.json();
            setnewData(actualnewData);
        } catch (err) {
            setnewData(null);
        }
    };
     return (

        <div>
            <ol>
                {newdata.map((data) => (
                    <li key={data.id} className="newdata">
                        <p>
                            <b>USER ID:</b> {data.userId}
                        </p>
                        <p>
                            <b>TITLE:</b> {data.title}
                        </p>
                        <p>
                            <b>BODY TEXT:</b> {data.body}
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    )
}




// export default function Useredit() {
//
//     const {id} = useParams();
//     // console.log({id})
//    const Newresponse= fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

//
//
//
//     return (
//
//         <div>
//             {/*<Handlechange/>*/}
//             {/*<button onClick={Handlechange}>UPDATE</button>*/}
//             {/*<p className="useredit">*/}
//             {/*    <b>USER ID:</b> {id.userId}*/}
//             {/*    <br/>*/}
//             {/*    <b>TITLE:</b> {title}*/}
//             {/*    <br/>*/}
//             {/*    <b>BODY TEXT:</b> {body}*/}
//             {/*    <br/>*/}
//             {/*</p>*/}
//
//         </div>
//     )
// }