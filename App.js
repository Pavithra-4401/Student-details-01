import React, { useState } from "react";
import './App.css';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from './footer';
import ItemList from "./itemList";
import ItemForm from "./ItemForm";


const App = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const editItem = (item) => {
    setEditingItem(item);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setEditingItem(null);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      
      <div className='m-0 p-0'><Header /></div>
      <div className='container pt-1'>
       <ItemForm addItem={addItem} editingItem={editingItem} updateItem={updateItem} />
       <div className="m-0" style={{position:'relative',bottom:'0',width:'97%'}}>
      <ItemList items={items} editItem={editItem} deleteItem={deleteItem} />
      </div>
      </div>
      <div className='text-center ' style={{position:'fixed',bottom:'0',width:'100%'}} >  <Footer />  </div>
      
    </div>

  );
};

export default App;



