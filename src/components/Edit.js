import React, { useState } from 'react'

const Edit = (props) => {
    const [bucket,setbucket]=useState({name:"",email:"",role:""});
    const handleChange=(e)=>{
          setbucket({...bucket,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
           e.preventDefault();
           let buck={...bucket};
           buck.id=props.editID;
           setbucket(buck);
           console.log(buck);
           let newList=props.items.map((element)=>{
                 if(element.id!==props.editID){
                    return element
                 }
                 else{
                    return buck
                 }  
           })
           props.setItems(newList);
           const editbtn=!props.editEnable;
           props.seteditEnable(editbtn);
    }
  return (
    <form onSubmit={handleSubmit} className='form'>
        <div className='formStyle'>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' id='name' onChange={handleChange}/>
        </div>
        <div className='formStyle'>
        <label htmlFor="email">Email</label>
        <input type="text" name='email' id='email' onChange={handleChange}/>
        </div>
        <div className='formStyle'>
        <label htmlFor="role">Role</label>
        <input type="text" name='role' id='role' onChange={handleChange}/>
        </div>
        <button type="submit">Update</button>
    </form>
  )
}

export default Edit
