// import {useLocation} from 'react-router-dom';
import {useParams} from "react-router-dom";

export default function Useredit(){

    const {id}=useParams();
    // const search= useLocation().search;
    // const name=new URLSearchParams(search).get('name')
    return(
        <div>
            <p><b>TITLE:</b>{id}</p>
        </div>

        // <div className="useredit">
        //     <h3>Items page</h3>
        //     <p>{name}</p>
        // </div>
    )

}

