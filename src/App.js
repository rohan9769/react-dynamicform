import './App.css';

import { useState } from 'react';
import { Container} from 'react-bootstrap';

function App() {
  const[inputFields,setInputFields] = useState([
    {firstName : '',lastName : ''}
  ])

  const handleChangeInput = (index , e) =>{
    console.log(index,e.target.name) // gives output 0 , firstName
    const values = [...inputFields]
    values[index][e.target.name] = e.target.value
    setInputFields(values)
  }

  const handleAddFields = () =>{
    setInputFields([...inputFields,{firstName : '',lastName : ''}])
  }

  const handleRemoveFields = (index) =>{
    const values = [...inputFields]
    values.splice(index,1)
    setInputFields(values)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('InputFields : ' , inputFields)
  }

  return (
    <div>
      <Container>
        <h1>Add New Member</h1>
          <form onSubmit={handleSubmit}>
            {inputFields.map((inputField,index)=>(
              <div key={index}>
                <label>First Name : </label>
                <input name='firstName' type='text' placeholder='firstName' value={inputField.firstName} onChange={e => handleChangeInput(index,e)}></input>
                <label>Last Name : </label>
                <input name='lastName' type='text' placeholder='lastName' value={inputField.lastName} onChange={e => handleChangeInput(index,e)}></input>
                <button type='button' onClick={()=>handleAddFields()}>Add</button>
                <button type='button' onClick={()=>handleRemoveFields(index)}>Remove</button>
              </div>
            ))}
            <button type='button' onClick={handleSubmit}>Send !</button>
          </form>
        </Container>
    </div>
  );
}

export default App;
