import './App.css';
import Search from './components/Search';
import Info from './components/Info';
import Pagination from './components/Pagination';
import { useState } from 'react';
import Edit from './components/Edit';
function App() {
  const [items,setItems]=useState([]);
  const [totalPages,settotalPages]=useState(0);
  const [indexstart,setIndexstart]=useState(0);
  const [indexend,setIndexend]=useState(9);
  const [editEnable,seteditEnable]=useState(false);
  const [editID,seteditID]=useState(0);
  return (
    <>
    <Search items={items} setItems={setItems}/>
    {editEnable && <Edit editID={editID} items={items} setItems={setItems} seteditEnable={seteditEnable} editEnable={editEnable}/>}
    <Info items={items} setItems={setItems} editEnable={editEnable} seteditEnable={seteditEnable} settotalPages={settotalPages} indexstart={indexstart} indexend={indexend} seteditID={seteditID}/>
    <Pagination totalPages={totalPages} items={items} indexstart={indexstart} indexend={indexend} setIndexstart={setIndexstart} setIndexend={setIndexend} setItems={setItems}/>
    </>
  );
}

export default App;
