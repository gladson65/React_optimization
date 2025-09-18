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
      return item.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, items]);

  // useCallback for avoid recreating function every render
  const handleClick = useCallback((item)=> {
    alert(`you clicked on ${item}`)
  }, [])

  return (
    <>
      <div className='p-4 space-y-4'>
        <h1 className='text-xl font-bold'>
          React Optimization
        </h1>

        <input type='text' placeholder='Search.....' 
          value={search} onChange={(e)=> setSearch(e.target.value)}
          className='border p-2 rounded'
        />

        <button onClick={()=> setCount((num) => num + 1)}
          className='bg-blue-500 text-white px-3 py-1 rounded'
        >
          Increment Count ({count})
        </button>

        <ul className='list-disc pl-6'>
          {
            filteredItems.map((item) => {
              return <ListItems key={item} item={item} onClick={handleClick}/>
            })
          }
        </ul>
        
      </div>
    </>
  )
}

export default App
