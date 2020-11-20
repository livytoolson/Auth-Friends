import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendForm from './FriendForm';

const Friends = () => {
    const[friends, setFriends] = useState([])

    const getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => { console.log(err.response) })
    }

    useEffect(() => {
        getFriends();
    }, []);

    return (
        <div>
            <FriendForm setFriends={setFriends}/>
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
        </div>
        </div>
    )
};

export default Friends;