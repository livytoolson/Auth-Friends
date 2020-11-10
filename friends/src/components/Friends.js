import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendForm from './FriendForm';

const Friends = () => {
    const[friends, setFriends] = useState([])

    const getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => { console.log(err.response) })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="friendList">
            {friends.map(friend => {
                return (
                    <div className="friend" key={friend.id}>
                        <h3>{friend.name}</h3>
                        <p>Age: {friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                )
            })}
            <div>
                <FriendForm />
            </div>
        </div>
    )
};

export default Friends;