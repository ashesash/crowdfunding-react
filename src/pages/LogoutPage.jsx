import React from 'react';

const LogoutPage = () => {
    window.localStorage.removeItem("token")
    return <h1>You're logged Out</h1>
};

export default LogoutPage;