import {useLocation} from 'react-router-dom';
export default function Useredit(){
    const location = useLocation();
    return(

        <div className="useredit">
            <p><b>TITLE: </b>{location.state.name}</p>
            <p><b>BODY: </b>{location.state.body}</p>
        </div>
    )

}

