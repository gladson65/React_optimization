import { useState, useMemo, useCallback } from 'react';
import ListItems from './components/ListItems';
import './App.css'

function App() {
  
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const items = ["apple", "banana", "grapes", "guava", "cherry", "mango"];

  // useMemo for avoid recalculating filtered list on every render
  const filteredItems = useMemo(()=> {
    return items.filter((item) => {
      item.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, items]);

  return (
    <>
      
    </>
  )
}

export default App
