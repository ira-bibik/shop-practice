import React from 'react';
import Item from './Item';

const Items = ({items}) => {
    return (
        <main>
            {items.map((element) => (
                <Item key={ element.id} item={ element} />
            ))}
        </main>
    );
};

export default Items;
