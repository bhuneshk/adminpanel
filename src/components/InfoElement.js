
import React from 'react'
const InfoElement = (props) => {
    const handleEdit=()=>{
        const editbtn=!props.editEnable;
        props.seteditEnable(editbtn);
        props.seteditID(props.id);
    }
    const handledeleted=()=>{
          let updatedList=props.items.filter((item)=>{
            return item.id!==props.id
          })
          props.setItems(updatedList);
    }
    const handleClick=(e)=>{
        const {name,checked}=e.target;
        let newList=props.items.map((item)=>{
                return item.id===name?{...item,isChecked:checked}:item
        })
        props.setItems(newList);
        props.selfCheck();
    }
    
  return (
    <div className='InfoElement' id={props.id}>
        <div className='checkbox'><input type="checkbox" name={props.id}  checked={props.checked} onChange={handleClick}/></div>
        <div className='name'>{props.name}</div>
        <div className='email'>{props.email}</div>
        <div className='role'>{props.role}</div>
        <div className='action'>
            <img src={require('../assest/edit.png')} alt="edit" onClick={handleEdit} />
            <img src={require('../assest/bin.png')} alt="delete" onClick={handledeleted}/>
        </div>
    </div>
  )
}

export default InfoElement
