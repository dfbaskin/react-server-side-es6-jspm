
import React from 'react';

var counter = 0;

export default class Hello extends React.Component {
    render() {
        console.log("Hello.render #" + (counter+1));
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
