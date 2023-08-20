import { useState } from "react"
import ListItem from "./ListItem";
import FormInput from "./FormInput";

const ShoppingList = () => {
    const [val, setVal] = useState([]);
    const [text, setText] = useState('');

    const handleSubmit = () => {
        const newItem = [text, ...val];
        if(text !== ''){
            setVal(newItem);
        }
        setText('');
    }

    const handleDelete = (item) =>{
        const del = val.filter(value => value !== item);
        setVal(del);
    }

  return (
    <>
    <div className="listBox">
     <FormInput 
       title = "Shopping List"
       text = {text}
       setText = {setText}
       handleSubmit = {handleSubmit}
     />

    <ul className="list-items">
         { val.map((value, index) => (
            <ListItem key={index}  value = {value} handleDelete = {handleDelete} />

         ))
         } 
    </ul>
    </div>
    </>
  )
}

export default ShoppingList
