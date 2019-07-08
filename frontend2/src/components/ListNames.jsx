import React from 'react'

const ListNames = (props) => {
    const items = props.data.map(
        (i, v) => {
            return <li>{i} : {v}</li>
        }
    )
    return (
        <ul>
            {items}
        </ul>
    );
}
export default ListNames;