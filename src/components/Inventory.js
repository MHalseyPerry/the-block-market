import React from 'react';
import './inventory.css'

const EMPTY_ITEM = 'empty_item';

export const Inventory = ({ items, space = 54 }) => {
    const emptyCount = Math.max(0, space - items.length);
    const emptyItems = Array(emptyCount).fill(EMPTY_ITEM);

    return (
        <div className="inventory">
            {items.map(({ type, meta }) => (
                <div className="item" key={`${type}-${meta}`}>
                    <img src={`/img/item_icons/${type}-${meta}.png`}/>
                </div>
            ))}
            {emptyItems.map((item, index) => (
                <div className="item" key={index}/>
            ))}
        </div>
    );
}






//     let grid = items;

//     if (grid.length < INV_SPACE){
//         const extraItemsCount = INV_SPACE - grid.length;
//         const  newItems = Array(extraItemsCount).fill(EMPTY_ITEM);
//         console.log(Array(extraItemsCount));
//         grid.push(...newItems);
//     }

//     return (
//         <div className="inventory">
//             {grid.map(item => item !== EMPTY_ITEM ? (
//                 <div className="item">
//                     <img src={`/img/item_icons/${item.type}-${item.meta}.png`}/>
//                 </div>
//             ) : (
//                 <div className="empty-item" />
//             ))}
//         </div>
//     );

// };


