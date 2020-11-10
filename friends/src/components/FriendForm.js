import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormValues = {
    id: Date.now(),
    name: '',
    age: '',
    email: ''
}

const FriendForm = () => {
    const[newFriend, setNewFriend] = useState(initialFormValues)

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then((res) => {
                setNewFriend(res.data)
            })
            .catch((err) => console.log(err))
        setNewFriend(initialFormValues);
    }

    const handleChange = (e) => {
        setNewFriend({
            ...newFriend, 
            [e.target.name]: e.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="name"
                placeholder="Name"
                value={newFriend.name}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="age"
                placeholder="Age"
                value={newFriend.age}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="email"
                placeholder="Email"
                value={newFriend.email}
                onChange={handleChange}
                />

                <button type="submit" onSubmit={handleSubmit}>Add Friend</button>
            </form>
        </div>
    )
};

export default FriendForm;