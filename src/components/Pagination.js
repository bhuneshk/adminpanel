import React from 'react'

const Pagination = (props) => {
  const handlefirst=()=>{
       let newindexstart=0;
       let newindexend=9;
       props.setIndexstart(newindexstart);
       props.setIndexend(newindexend);
  }
  const handleprevious=()=>{
    let newindexstart=props.indexstart-10;
    let newindexend=props.indexend-10;
    props.setIndexstart(newindexstart);
    props.setIndexend(newindexend);
}
const handlenext=()=>{
    let newindexstart=props.indexstart+10;
    let newindexend=props.indexend+10;
    props.setIndexstart(newindexstart);
    props.setIndexend(newindexend);
}
const handlelast=()=>{
    let newindexstart=(props.totalPages-1)*10;
    let newindexend=props.totalPages*10;
    props.setIndexstart(newindexstart);
    props.setIndexend(newindexend);
}
const handledelete=()=>{
     const newList=props.items.filter((item)=>{
           return item.isChecked!==true
     })
     props.setItems(newList);
}
  return (
    <div className='pagination'>
        <button className='deleteSelectedbtn' onClick={handledelete}>
            Delete Selected
        </button>
        <div className='PageNumber'>
            Page {Math.ceil(props.indexend/10)} of {props.totalPages}
        </div>
        <div className='btn'>
            <button className='first' onClick={handlefirst} disabled={props.indexstart===0}>
            &laquo;
                     
            </button>
            <button className='previous' onClick={handleprevious} disabled={props.indexstart===0}>
            &#8249;
            </button>
            <button className='next' onClick={handlenext} disabled={props.indexstart>=(props.totalPages-1)*10}>
            &#8250; 
            </button>
            <button className='last' onClick={handlelast} disabled={props.indexstart>=(props.totalPages-1)*10}>
            &raquo;
            
            </button>
        </div>
    </div>
  )
}

export default Pagination
