import React from 'react';
import { Button } from 'react-bootstrap';

const AccountSettings = () => {
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
            <Button>Logout</Button>
        </div>
    )
}

export default AccountSettings;
