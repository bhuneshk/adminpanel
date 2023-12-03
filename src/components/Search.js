import React, { useState } from 'react'

const Search = (props) => {
  const [fillter,setFilter]=useState({name:"",email:"",role:""});
  const handleChange=(e)=>{
       setFilter({...fillter,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
       e.preventDefault();
       let newList=props.items.filter((element)=>{
             return (fillter.name===element.name || fillter.email===element.email || fillter.role===element.role)
       })
       console.log(newList);
       props.setItems(newList);
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
    <button type="submit">Search</button>
</form>
    
  )
}

export default Search
