import {Link} from "react-router-dom";
import "./style.css";
export default function Fetching(){
    return(
        <div>
            <Link className="Fetch" to="/user"><button>FETCH POST</button></Link>

        </div>
    )
}