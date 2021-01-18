import React from 'react';

const AddUserList = ({ userList, handleRemoveUser }) => {
    const { img, name, id } = userList;
    return (
        <div style={{ border: '1px solid gray', padding: '5px', margin: '10px' }} className="d-flex">
            <div>
                <img style={{ width: '60px', height: '60px' }} src={img} alt="" />
            </div>
            <div className="ml-2">
                <h5>Name: {name}</h5>
                <button onClick={() =>handleRemoveUser(id)} className="btn btn-danger">Remove User</button>
            </div>
        </div>
    );
};

export default AddUserList;