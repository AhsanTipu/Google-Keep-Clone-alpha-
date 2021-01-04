import React from 'react'
import "../css/Keep.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const List=(props)=>{

    const deleteI=()=>{
        props.select(props.id);
    }
    return(
<div className="listzz flex">
<div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="insidera shadow p-3 mb-5 bg-white rounded">
<div>
    <div className="hhhs">
    <h3 className="heading">{props.title}</h3>
    </div>
<p className="para">{props.content}</p>
</div>
<Button variant="contained" color="primary" className="submitb" onClick={deleteI}>
<DeleteOutlineIcon className="plus"/>
</Button>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default List;