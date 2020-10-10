import React from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const Item = styled.li`
    cursor: pointer;
`;

function ItemList({itemList, renderItem, onItemSelected}) {
    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item,
                  label = renderItem(item);
            
            return (
                <Item 
                    key={id}
                    className="list-group-item"
                    onClick={() => {
                        onItemSelected(id);
                    }}>
                    {label}
                </Item>
            )
        });
    }

    if (!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList);

    return (
        <>
            <ul className="item-list list-group">
                {items}
            </ul>
            <br/>
        </>
    );
}

export default ItemList;