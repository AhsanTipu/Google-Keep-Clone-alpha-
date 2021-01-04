import React, { useState } from "react";
import "../css/Keep.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const Main=(props)=>{
const [text,setText]=useState({
    title : "",
    content : "",
});
const get_Title=(event)=>{
setText((old)=>{
    const {name,value}=event.target;
return{
    ...old,
[name]:value,
}
})
// console.log(text);
}
    const Submit=()=>{
{props.pass(text)}

setText({
    title: "",
    content : "",
})
    }
    return(
<div className="maindiv">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="insider shadow p-3 mb-5 bg-white rounded">

<input type='text' className="txtff" placeholder="Title" onChange={get_Title} name="title" value={text.title} />
<textarea onChange={get_Title} autoComplete="off"  id="areat" cols=" " rows="6" value={text.content} name="content" placeholder="Write a note"></textarea>

<div>
</div>
<Button variant="contained" color="primary" className="submitb" onClick={Submit}>
<AddIcon className="plus"/>
</Button>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Main;