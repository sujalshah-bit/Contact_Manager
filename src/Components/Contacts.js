import React, { useContext } from "react";
import MyContext from "./MyContext";
const Contacts = (props) => {
let bool = false
const {contacts,deleteItemFromArray} = useContext(MyContext)

const deleteANode = (nodeId)=>{
  deleteItemFromArray(nodeId)
}


  return (
    <>
      <div className="contacts">
        <div className="con_head">
          <h1>Contacts</h1>
          <hr />
          <br />
        </div>  
      {
        contacts.map((elem) =>{
          return(
            <>
            <div className="contact" key={elem.id}>
                <div className="avatar"></div>
                <div className="contact_info">
                  <p>{elem.name}</p>
                  <p>{elem.email}</p>
                  <p>{elem.phone}</p>
                </div>
                
                <button className="delete" onClick={()=>deleteANode(elem.id)}>Delete </button>
              </div>
            </>
          )
        })
      }
      </div>
    </>
  );
};

export default Contacts;
