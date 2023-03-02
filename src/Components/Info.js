import React, { useState, useContext } from "react";
import MyContext from './MyContext';

const Info = (props) => {
  const date = new Date();
  const id = date.getTime().toString();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const { contacts, addItemToArray,removeAll} = useContext(MyContext)

  const add = () => {
    if(name === "" || email === "" || phone === 0){
        alert("please Enter valid Information!")
    }else{
        const newContact = { id: id, name: name, email: email, phone: phone }
        addItemToArray(newContact)
        setName("")
        setEmail("")
        setPhone(0)
    }
    
   
  };
  const deleteAll = () => {
    removeAll()

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    add();
  };

  return (
    <>
      <div className="add_info">
        <div className="heading">
          <h1>Contact Manager</h1>
        </div>
        <hr />
        <br />
        <form className="form_control" action="#" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              placeholder=" Enter Name..."
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              placeholder=" examp@123.com"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="number">Number </label>
            <input
              type="number"
              placeholder=" 93689xxxx"
              id="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="buttons">
           

          <button type="submit" className="btn">Add</button>
            <button type="button" className="btn" onClick={deleteAll}>
              Delete All
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Info;
