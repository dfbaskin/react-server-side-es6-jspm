
import React from 'react';
import Hello from './Hello.jsx!';
import items from './itemsList.jsx!';

export default React.renderToString(
    <Hello items={items} />
);

//export default items;
