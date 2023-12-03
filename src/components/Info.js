import React, { useEffect, useState } from 'react'
import InfoElement from './InfoElement'

const Info = (props) => {
  const [allSelect,setallSelect]=useState(0);
  const handleChange=(e)=>{
        const {checked}=e.target;
        let updatedList=props.items.map((element)=>{
               if(element.id>=props.indexstart && element.id<=props.indexend){
                    return {...element,isChecked:checked}
               }
               else{
                    return {...element,isChecked:false}
               }
        })
        console.log(updatedList)
        props.setItems(updatedList);
        setallSelect(checked);
  }
  const update=async ()=>{
    let url='https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
    let data=await fetch(url);
    let parsedData= await data.json();
    const Length=Math.ceil(parsedData.length/10);
    console.log(Length);
    props.settotalPages(Length);
    props.setItems(parsedData);
  }
  useEffect(() => {
    update()
  }, [])
 
  const selfCheck=()=>{
      const check=props.items.filter((element)=>{
              return (element.isChecked!==true) && (element.id>=props.indexstart && element.id<=props.indexend)
      })
      if(check.length<1){
        setallSelect(0)
      }
  }
  return (
    <div>
      <div className="tablehead">
        <div className='checkbox'>
        <input type="checkbox" name="selectALL" id="selectALL" onChange={handleChange} checked={allSelect} />
        <div className='text-checkbox'>Select All</div>
        </div>
        <div className='name'>Name</div>
        <div className='email'>Email</div>
        <div className='role'>Role</div>
        <div className='action'>Action</div>
      </div>
      <hr />
      {props.items.map((element)=>{
        return (element.id>=props.indexstart && element.id<=props.indexend) &&  <InfoElement id={element.id} name={element.name} email={element.email} role={element.role} seteditEnable={props.seteditEnable} editEnable={props.editEnable} checked={element.isChecked} setItems={props.setItems} items={props.items} selfCheck={selfCheck} seteditID={props.seteditID}/>
      })}
    </div>
  )
}

export default Info
