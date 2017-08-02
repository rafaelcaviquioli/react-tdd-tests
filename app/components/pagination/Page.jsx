import React from 'react';

const Page = props => {
    return (
        <label className={props.selected ? 'selected' : ''}>
            {props.value}
        </label>
    );
}

export default Page;