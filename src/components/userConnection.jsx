import React from 'react';

const UserConnection = ({ title, children, currentPage }) => {
    return (
        <div className='bg-[#cba89e]'>
            <form action="">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" />
            </form>
        </div>
    )
}

export default UserConnection;