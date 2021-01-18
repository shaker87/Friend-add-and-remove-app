import React from 'react';
import './UserDetails.css';

const UserDetails = ({ user, handleAddUser }) => {
    const { name, gender, email, address, img, phone } = user;
    const imgStyle = { width: '190px', height: '170px', borderRadius: '5px' };
    return (
        <div className="col-md-6">
            <div className="user-container">
                <img style={imgStyle} src={img} alt="1" />
                <div className="user-details ml-2">
                    <h6>Name: {name}</h6>
                    <h6>Phone: {phone}</h6>
                    <h6>Email: {email}</h6>
                    <h6>Gender: {gender}</h6>
                    <h6>Address: {address}</h6>
                    <button onClick={() => handleAddUser(user)} className="btn btn-primary">Add Friend</button>
                </div>
            </div>

        </div>
    );
};

export default UserDetails;