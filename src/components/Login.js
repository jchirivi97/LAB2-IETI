import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


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

export default Login;