# Server-side Rendering with React and JSPM

This is a simple example of doing server-side rendering with [React](https://facebook.github.io/react/),
using [ES6](https://github.com/lukehoban/es6features) source and the [JSPM](http://jspm.io/)
package manager.  It's not meant for production code but hopefully helpful as an example.

After installing the Node and JSPM dependencies, navigate to `http://localhost:9779/` for client-side
rendering, and `http://localhost:9779/render` for server-side rendering.

On the client side, the content is rendered like so:

```
React.render(
    <Hello items={items} />,
    document.getElementById("injected-content")
);
```

and on the server side like so:
 
```
export default React.renderToString(
    <Hello items={items} />
);
```

along with some help from JSPM and injecting the resulting rendered markup into the HTML template file:

```
jspm
    .import('app/app-server.jsx!')
    .then(function(injectedScript) {
        content = content.replace(templateRegex, injectedScript.default);
        res.setHeader('Content-Type', 'text/html');
        res.end(content);
```

