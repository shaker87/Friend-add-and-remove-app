import React, { useEffect, useState } from 'react';
import './User.css'
import { fakeData } from '../../FakeData/FakeData';
import UserDetails from '../UserDetails/UserDetails';
import AddUserList from '../AddUserList/AddUserList';
// console.log(fakeData)



const User = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        setUsers(fakeData)
    }, [])

    const [addUser, setAddUser] = useState([])

    const handleAddUser = (user) => {
        const newAdddUser = [...addUser, user]
        setAddUser(newAdddUser)

    }

    const handleRemoveUser = (id) => {
        // console.log("Romved", id)
        const removedUser = addUser.filter(user => user.id !== id)
        setAddUser(removedUser)
    }
    return (
        <div className="row user-style">
            <div className="user col-md-8">
                <div className="row">
                    {
                        users.map((user, index) => <UserDetails
                            user={user}
                            key={index}
                            handleAddUser={handleAddUser}>
                        </UserDetails>)
                    }
                </div>
            </div>
            <div className="select-user-list col-md-4">
                <h4>Added User: {addUser.length}</h4>
                {
                    addUser.map((userList, index) => <AddUserList
                        userList={userList}
                        handleRemoveUser={handleRemoveUser}
                        key={index}>
                    </AddUserList>)
                }
            </div>
        </div>
    );
};

export default User;