

<h1 align="center">1.2 React Material</h1>


React project using Material-UI library.

## Part 1: Create a Login Component

![image](https://user-images.githubusercontent.com/48265107/108289545-96734a00-715c-11eb-91f8-5c35c1f040cc.png)


## Part 2: Enable App Navigation 

- Constantes para cada vista 

![image](https://user-images.githubusercontent.com/48265107/108297567-76965300-7169-11eb-87a1-ac4234cfe983.png)


- Import the following components in the `App.js` file:

```javascript
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
```

- Update the _render_ method of `App.js` including the routing logic:

![image](https://user-images.githubusercontent.com/48265107/108308234-6be5b900-717d-11eb-959d-e732320bf00f.png)

-  Run the application and test that the navigation works.

Login:

![image](https://user-images.githubusercontent.com/48265107/108308347-9cc5ee00-717d-11eb-92e1-86b8050025c0.png)

Todo:

![image](https://user-images.githubusercontent.com/48265107/108308438-c0893400-717d-11eb-86d2-b1b110b92c09.png)


- Add a state *isLoggedIn* to the `App.js` component to know when and what view to display.

![image](https://user-images.githubusercontent.com/48265107/108307972-e95cf980-717c-11eb-9813-eee0ad7106a7.png)

![image](https://user-images.githubusercontent.com/48265107/108308044-0bef1280-717d-11eb-9b85-28d4f646bdbf.png)


- Set the default value of *isLoggedIn* to false and then add a condition inside the render method that renders the correct view.

![image](https://user-images.githubusercontent.com/48265107/108307905-c6324a00-717c-11eb-9732-f74ec891a0a0.png)


## Part 3: Local Storage

In order to create Web applications that work offline we can use the local storage. You can use it directly on your js files as follows:

```javascript

//Save data
localStorage.setItem('key', value);

//Read data
localStorage.getItem('key');

```
  
1. Use the local storage to store a default user (username and password).

![image](https://user-images.githubusercontent.com/48265107/108312274-722b6380-7184-11eb-8699-58fe13176ea2.png)

![image](https://user-images.githubusercontent.com/48265107/108312364-9d15b780-7184-11eb-82b4-0b91b094d5f6.png)


2. Add the click handler to Sign In button in order to verify that the user exists (use the one saved on the *localStorage*)

![image](https://user-images.githubusercontent.com/48265107/108311937-e4e80f00-7183-11eb-8404-5ebf7c03ea8a.png)


![image](https://user-images.githubusercontent.com/48265107/108311975-f4ffee80-7183-11eb-94d2-8a67d7941dc3.png)

3. Once the user is authenticated successfully then store the *isLoggedIn* on the storage and add the logic to make sure this value is set to state everytime the application is loaded.
This will prevent the user authentication every time!

```javascript
class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            user: '',
            password:''
        }
        this.loggear = this.loggear.bind(this);
        this.user = this.user.bind(this);
        this.password = this.password.bind(this);
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" onSubmit={this.loggear}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus
                                    onChange={this.user}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.password}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    loggear(e){
        e.preventDefault();
        let data = JSON.parse(localStorage.getItem('user'));
        if(this.state.user == data.user && this.state.password == data.clave){
            localStorage.setItem('isLoggedIn',true);
            alert('Ingreso exitoso')
        }else{
            alert('Usuario o Clave Incorrecta')
            localStorage.setItem('isLoggedIn',false);
        }
    }
    user(e){
        this.setState({
            user: e.target.value
        })
    }
    password(e){
        this.setState({
            password: e.target.value
        })
    }

}
```


4. Run the application and then stop the server and verify the data is persisted.

![image](https://user-images.githubusercontent.com/48265107/108312364-9d15b780-7184-11eb-82b4-0b91b094d5f6.png)

Tip: You can use the Google Chrome Developer tools under the Application tab to explore the Local Storage. 
   
