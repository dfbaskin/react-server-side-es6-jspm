
import React from 'react';

export default class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>Items:</p>
                <ul>
                    {
                        this.props.items.map(function(item) {
                            return <li key={item}>{item}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}
