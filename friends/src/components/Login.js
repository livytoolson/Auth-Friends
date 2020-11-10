import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialCredentials = {
    credentials: {
        username: '',
        password: ''
    }
};

const Login = () => {
    const[state, setState] = useState(initialCredentials)

    const history = useHistory();

    const handleChange = (e) => {
        setState({
            ...state.credentials,
            [e.target.name]: e.target.value
        })
    };

    const login = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', state.credentials)
        .then((res) => {
            window.localStorage.setItem('token', res.data.payload)
            history.push('/protected')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="loginParent">
            <form className="loginForm" onSubmit={login}>
                <input className="loginInput"
                type="text"
                name="username"
                placeholder="username"
                value={state.credentials.username}
                onChange={handleChange}
                />
                <input className="loginInput"
                type="password"
                name="password"
                placeholder="password"
                value={state.credentials.password}
                onChange={handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
     )
};

export default Login;