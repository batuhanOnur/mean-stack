import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        { id: 'u1', name: 'Batuhan Onur', image: 'https://i.ytimg.com/vi/Tv1qoUt5lNM/maxresdefault.jpg', places: 3 }
    ];

    return (
        <UsersList
            items={USERS}
        />
    );
}

export default Users;
