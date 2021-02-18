

<h1 align="center">1.2 React Material</h1>


React project using Material-UI library.

## Part 1: Create a Login Component

![image](https://user-images.githubusercontent.com/48265107/108289545-96734a00-715c-11eb-91f8-5c35c1f040cc.png)


## Part 2: Enable App Navigation 

1. Refactor your `App.js`. 
    * Create a new file called `TodoApp.js` under the `components` folder and extract all the logic of the Todo App into this file.
    * Move the rest of the files related to the TodoApp component into the `components` folder.
    * Change the Todo components to use react Material elements: Button, TextField, Card and DatePickers.

2. Add the `react-router-dom` dependency to your `package.json` file and install it:

```javascript
   "react-router-dom": "^4.3.1"   
```

```javascript
   npm install
```
        
3. Create a constant for each View (Login and TodoApp) in the App.js file:

```javascript
const LoginView = () => (
      <Login/>
  );

const TodoAppView = () => (
      <TodoApp/>
  );
```

4. Import the following components in the `App.js` file:

```javascript
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
```

5. Update the _render_ method of `App.js` including the routing logic:

```javascript

    render() {

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            </Router>
        );
    }
```

6. Run the application and test that the navigation works.

7. Read the _React Route Training_ documentation and learn about the BrowserRouter Component:
https://reacttraining.com/react-router/web/example/basic


8. Add a state *isLoggedIn* to the `App.js` component to know when and what view to display.

Tip: Don't attempt to use the _Redirect_ component of the React Router to handle your public and private routes. For now, it would be enough to allow or forbid the access to a _Route_ by using boolean javascript expression inside your JSX.

9. Set the default value of *isLoggedIn* to false and then add a condition inside the render method that renders the correct view.


## Part 3: Local Storage

In order to create Web applications that work offline we can use the local storage. You can use it directly on your js files as follows:

```javascript

//Save data
localStorage.setItem('key', value);

//Read data
localStorage.getItem('key');

```
  
1. Use the local storage to store a default user (username and password).

2. Add the click handler to Sign In button in order to verify that the user exists (use the one saved on the *localStorage*)

3. Once the user is authenticated successfully then store the *isLoggedIn* on the storage and add the logic to make sure this value is set to state everytime the application is loaded.
This will prevent the user authentication every time!

4. Run the application and then stop the server and verify the data is persisted.

Tip: You can use the Google Chrome Developer tools under the Application tab to explore the Local Storage. 
   
