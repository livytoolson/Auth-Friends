import React, { useState } from 'react';
import axios from 'axios';

const initialFormValues = {
    id: Date.now(),
    name: '',
    age: '',
    email: ''
}

function FriendForm() {
    const[newFriend, setNewFriend] = useState(initialFormValues)

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post()
            .then()
            .catch()
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
                onChange={handleChange}
                />
                <input 
                type="text"
                name="age"
                placeholder="Age"
                onChange={handleChange}
                />
                <input 
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                />

                <button onClick={handleSubmit}>Add Friend</button>
            </form>
        </div>
    )
};

export default FriendForm;