import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormValues = {
    id: Date.now(),
    name: '',
    age: '',
    email: ''
}

const FriendForm = ({ setFriends }) => {
    const[formValue, setFormValue] = useState(initialFormValues)

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', formValue)
            .then((res) => {
                setFriends(res.data)
            })
            .catch((err) => console.log(err))
        setFormValue(initialFormValues);
    }

    const handleChange = (e) => {
        setFormValue({
            ...formValue, 
            [e.target.name]: e.target.value})
    }
    return (
        <div>
            <form className="friendForm" onSubmit={handleSubmit}>
                <input className="friendInput"
                type="text"
                name="name"
                placeholder="Name"
                value={formValue.name}
                onChange={handleChange}
                />
                <input className="friendInput"
                type="text"
                name="age"
                placeholder="Age"
                value={formValue.age}
                onChange={handleChange}
                />
                <input className="friendInput"
                type="text"
                name="email"
                placeholder="Email"
                value={formValue.email}
                onChange={handleChange}
                />

                <button type="submit" onSubmit={handleSubmit}>Add Friend</button>
            </form>
        </div>
    )
};

export default FriendForm;