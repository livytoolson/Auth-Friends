import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const token = window.localStorage.getItem('token')
        // get request
        // add the token to the authorization header
        axiosWithAuth()
        .get('/api/friends')
        .then((res) => {
            this.setState({
                friends: res.data
            })
        })
        .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Friends</h2>
                    <h3>Name</h3>
                    <p>Age</p>
                    <p>email</p>
                </div>
            </div>
        )
    };
};

export default Friends;