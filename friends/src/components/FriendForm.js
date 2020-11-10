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
            .post('http://localhost:5000/api/friends')
            .then((res) => console.log(res))
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

                <button onClick={handleSubmit}>Add Friend</button>
            </form>
        </div>
    )
};

export default FriendForm;