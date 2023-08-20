import Button from "./Button"

const FormInput = ({ title, text, setText, handleSubmit }) => {
  return (
    <form  onSubmit={(e)=> e.preventDefault()}>
    <h1 className="heading">{title}</h1>
    <div className="input">
    <input type="text"
       placeholder="Add a new item"
       required
       value={text}
       onChange={(e) => setText(e.target.value) }
    />

    <Button title = "Add" handleSubmit = {handleSubmit} />

    </div>
 </form>
  )
}

export default FormInput
