import React from 'react';

// child component that only re-renders when props change
const ListItems = React.memo(({ item, onClick}) => {
        console.log('Render:', item);

        return (
            <li onClick={()=> onClick(item)} className="cursor-pointer hover:text-blue-500">
                {item}
            </li>
        )
    })


export default ListItems;