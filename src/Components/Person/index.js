import React from 'react';

const Person = ({ p }) => (
    <div>
        <h2>{p.name}</h2>
        <img src={p.image} />
    </div>
);

export default Person;