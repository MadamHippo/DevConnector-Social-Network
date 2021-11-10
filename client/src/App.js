import './App.css';

//the order: index.js calls app.js and that's it. This is called JSX. It's a javascript extension. Javascript allows you to add HTML as part of this code which makes it extensible. Tha's how you do Single page applications which is why you have just one App.js. (CSS can be written separately but HTML and JS is mixed together in React.) JSX will have HTML embeeded in it. In Angular, all 4 components were separate for every component created...whereas React is ine one like this.

// Tell concurrently to run server, and then npm start preflix client and this will run both at the same time.

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
    </div>
  );
}

export default App;
