import React, { useContext } from 'react';
import Item from './Item';
import { Context } from '../App';

const Items = () => {
    const state = useContext(Context);
    return (
        <main>
            {state.items.map((element) => (
                <Item key={element.id} item={element}  />
            ))}
        </main>
    );
};

export default Items;
