import './App.css';
import Contacts from './Components/Contacts';
import Info from './Components/Info';
import {useState,useEffect} from  'react';
import MyContext from './Components/MyContext';

function App() {
  // To get Data from local storage 
  const getData = () =>{
    let list  =  localStorage.getItem('contacts')
    if(list){
      return JSON.parse(localStorage.getItem('contacts'))
    }else{
      return [];
    }
  }
  const [contacts, setContacts] = useState(getData())
 
  // To set Data To local storage 

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

   const addItemToArray = (item) =>{
    setContacts([...contacts, item])
  }

  const deleteItemFromArray = (id) =>{
     const revisedContacts =  contacts.filter((elem)=>{
        return elem.id !== id
      })
      setContacts(revisedContacts)
  }
  const removeAll = () =>{
    setContacts([])
  }
  return (
    <>
      <div className='box'>
      <MyContext.Provider value={{contacts, addItemToArray,deleteItemFromArray,removeAll}} >
          <Info  />  
          <Contacts  />      
      </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
