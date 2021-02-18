import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import TodoApp from "./components/TodoApp"
import {BrowserRouter as Router,Route, Link,Switch, Redirect} from 'react-router-dom'

const LoginView = () =>(
    <Login></Login>
);

const TodoAppView = ()=>(
    <TodoApp></TodoApp>
);


class App extends Component {

    constructor(props) {
        super(props); 
        localStorage.setItem('user',JSON.stringify({user: 'jimmy',clave:'1234'}));
        localStorage.setItem('isLoggedIn',false);
        this.state={
            isLoggedIn: localStorage.getItem('isLoggedIn')=='false'? false : true
        }      
        this.onClickTodo = this.onClickTodo.bind(this); 
    }

    render() {

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <br/>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo" onClick={this.onClickTodo}>Todo</Link></li>
                    </ul>                
                    <div>
                        <Switch>
                            <Route path="/todo" component={TodoAppView}></Route>
                            <Route extact path="/" component={LoginView}></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
            
        );

    }

    onClickTodo(event){
        
        if(this.state.isLoggedIn == false){
            window.location.href = "/";
            alert("No puede ingresar a todo");
        }
    }

}

export default App;
