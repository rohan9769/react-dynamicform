import './App.css';

import { useState } from 'react';
import { Container} from 'react-bootstrap';

function App() {
  const[inputFields,setInputFields] = useState([
    {firstName : '',lastName : ''}
  ])

  const handleChangeInput = (index , e) =>{
    console.log(index,e.target.name) // gives output 0 , firstName
    
  }
  return (
    <div>
      <Container>
        <h1>Add New Member</h1>
          <form>
            {inputFields.map((inputField,index)=>(
              <div key={index}>
                <label>First Name : </label>
                <input name='firstName' type='text' placeholder='firstName' value={inputField.firstName} onChange={e => handleChangeInput(index,e)}></input>
                <label>Last Name : </label>
                <input name='lastName' type='text' placeholder='lastName' value={inputField.lastName} onChange={e => handleChangeInput(index,e)}></input>
                <button type='button'>Add</button>
                <button type='button'>Remove</button>
              </div>
            ))}
            <button type='button'>Send !</button>
          </form>
        </Container>
    </div>
  );
}

export default App;
