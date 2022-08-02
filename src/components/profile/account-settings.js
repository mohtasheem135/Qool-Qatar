import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const AccountSettings = () => {
    const navigate = useNavigate();
    function logOut() {
        localStorage.removeItem('otp_signIn')
        localStorage.removeItem('userID')
        navigate('/')
        window.location.reload()
    }
    return (
        <div className="setting-box">
            <h3>Account Settings</h3>
            <div className="account-box">
                <div className="sign-txt">
                    <img src={require('../../assets/images/flat-color-icons_google.png')} alt="google" />
                    <div>
                        <p className="txt1">Signed-in using</p>
                        <p className="txt2">robertfox@gmail.com</p>
                    </div>
                </div>
                <p className="red-txt">Delete Account</p>
            </div>
            <Button onClick={logOut}>Logout</Button>
        </div>
    )
}

export default AccountSettings;
