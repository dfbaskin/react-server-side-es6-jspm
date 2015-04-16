
import React from 'react';
import Hello from './Hello.jsx!';
import items from './itemsList.jsx!';

React.render(
    <Hello items={items} />,
    document.getElementById("injected-content")
);
