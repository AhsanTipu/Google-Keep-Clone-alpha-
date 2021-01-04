import logo from './logo.svg';
import './App.css';
import Cards from "./Cards"
import "./css/Design.css"
import Data from "./Data"
import Slot from "./components/Slot"
import Counter from "./components/Counter";
import Time from "./components/Time";
import Events from "./components/Events";
import Forms from "./components/Forms";
import TodoList from  "./components/TodoList"
import ToDo from './components/ToDo'
import { propTypes } from 'react-bootstrap/esm/Image';
import Inc from './components/Inc'
import Bt from "./components/Bt"
import Button from 'react-bootstrap/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./GoogleKeep/Header"
import Main from "./GoogleKeep/Main"
import List from "./GoogleKeep/List"
import { useState } from 'react';


// import item from "./components/ToDo"

// function CallC(val){
//   return(
//   <Cards imgsrc={val.imgsrc} 
//   title={val.title}
//   tag={val.tag}
//   link={val.link}
//   />
//   )
// }
     {/* {Data.map(CallC)};  */}

function App(props) {
const [arr,setArr]=useState([]);
  function addNote(text){
    setArr((pre)=>{
      return [...pre,text]
    })
  
  console.log(text);
  }

  const DeleteItem=(id)=>{
setArr((pre)=>{
return pre.filter((val,index)=>{
  return index !=id;
})
})
  }

  return (
    <div className="App">
      <Header />
      <br />
      <Main 
      pass={addNote}
      
      />
      <br />
   
{arr.map((val,index)=>{
  return <List  
  key={index}
  id={index}
  title={val.title}
  content={val.content}
  select={DeleteItem}
  
  
  />
})}

    {/* <ToDo /> */}
    {/* <button className="btn btn-primary">AHSAN</button> */}
    {/* <Bt /> */}
    {/* <TodoList /> */}
    {/* <Inc /> */}
{/* <h1 className="head">The Slot Machine 🎰</h1>
<Slot x='😏' y='😏' z='😄' />
<Slot x='🖕' y='🖕' z='🖕'  />
<Slot x='🦕' y='😄' z='🎉' /> */}

{/* <Counter /> */}
{/* <Time />
<Forms /> */}
{/* <Events /> */}
    </div>
  );
}

export default App;
